import Room from "./Room";

export default class RoomManager {
    rooms;
    lobby;
    server;

    constructor(server) {
        this.server = server;
        this.rooms = new Map();
        this.lobby = new Room(this, "Lobby");
        this.lobby.temp = false;
        this.add(this.lobby);
    }

    remove(room) {
        this.rooms.delete(room.name);
        this.server.broadcast({roomClosed: {name: room.name}});
    }

    add(room) {
        this.rooms.set(room.name, room);
        this.server.broadcast({roomCreated: {name: room.name}});
    }

    get(name) {
        let room;
        if(room = this.rooms.get(name)) {
            return room;
        }
        room = new Room(this, name);
        this.add(room);
        return room;
    }
}
