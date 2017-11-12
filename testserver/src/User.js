import uuidv4 from 'uuid/v4';
import * as proto from "./proto/proto";

export default class User {
    uuid;
    username;
    room;
    um;
    ws;

    constructor(username, ws) {
        this.uuid = uuidv4();
        this.username = username;
        this.ws = ws;
    }

    moveTo(newRoom) {
        if(this.room) {
            this.room.remove(this);
        }
        this.room = newRoom;
        this.room.users.add(this);
        console.log(this.username + " moved to " + this.room.name);
    }

    send(message) {
        const packet = new proto.Packet(message);

        return new Promise((acc, rej) => {
            this.ws.send(proto.Packet.encode(packet).finish(), err => {
                if(err) rej(err);
                acc();
            })
        });
    }

    terminate() {
        if(this.room) {
            this.room.remove(this);
        }
        if(this.um) {
            this.um.remove(this);
        }
    }
}
