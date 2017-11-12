import WebSocket from 'ws';
import proto from './proto/proto';
import User from "./User";
import RoomManager from "./RoomManager";
import UserManager from "./UserManager";
import * as ProtoUtils from "./ProtoUtils";

export default class Server {
    rm;
    um;
    wss;

    constructor(Port) {
        this.handleConnection = this.handleConnection.bind(this);

        this.um = new UserManager();
        this.rm = new RoomManager(this);

        this.wss = new WebSocket.Server({ port: Port }, () => console.log(`Server started at port ${Port}`));
        this.wss.on('connection', this.handleConnection);
        this.wss.on('error', err => {
            console.error(err);
            this.wss.close(() => process.exit(-1));
        });
    }

    handleConnection(ws, req) {
        console.log("New user connected.");
        let user;

        ws.on('error', err => {
            console.error(err);
            ws.close();
        });

        ws.on('close', async (code, reason) => {
            console.log(code, reason);
            if(user) {
                user.terminate();
                await this.broadcast({userDisconnected: {uuid: user.uuid, reason}});
            }
        });

        ws.on('message', async msg => {
            const packet = proto.Packet.decode(new Uint8Array(msg));

            if(packet.handshake && user) {
                ws.close("Double handshake.");
            } else if(!packet.handshake && !user) {
                ws.close("You need to send Handshake first");
            } else if(packet.handshake && !user) {
                user = new User(packet.handshake.username, ws);
                await this.broadcast({userConnected: {uuid: user.uuid, username: user.username, room: this.rm.lobby.name}});
                user.moveTo(this.rm.lobby);
                await user.send(ProtoUtils.ServerStatus(this.rm, user.uuid));
                this.um.add(user);
            } else if (user) {
                await this.handlePacket(packet, user);
            }
        });
    }

    async broadcast(packet) {
        await [...this.um.users.values()].map(user => user.send(packet));
    }

    async handlePacket(packet, user) {
        switch (packet.content) {
            case "joinRoom":
                const room = this.rm.get(packet.joinRoom.name);
                await this.broadcast({userMoved: {uuid: user.uuid, room: room.name}});
                user.moveTo(room);
                break;
            case "textMessage":
                await [...user.room.users].map(u => u.send({textMessage: {userUUID: user.uuid, message: packet.textMessage.message}}));
                break;
        }
    };
}
