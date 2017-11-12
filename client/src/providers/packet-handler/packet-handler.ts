import {Injectable} from "@angular/core";
import {Packet} from "../../proto/proto";
import {RoomsProvider} from "../rooms/rooms";
import User from "../rooms/user";
import Room from "../rooms/room";
import {ChatProvider} from "../chat/chat";

@Injectable()
export class PacketHandlerProvider {

  constructor(public rooms: RoomsProvider, public chat: ChatProvider) {

  }

  public handle(packet: Packet) {

    switch(packet.content) {
      case "serverStatus":
        this.rooms.init(packet.serverStatus);
        break;
      case "userConnected":
        const user = new User(packet.userConnected);
        this.rooms.byName(packet.userConnected.room).users.push(user);
        break;
      case "userDisconnected":
        for(let user of this.rooms.users) {
          if(user.uuid === packet.userDisconnected.uuid) {
            const room = this.rooms.byName(user.room);
            room.users = room.users.filter(u => u.uuid !== user.uuid)
          }
        }
        break;
      case "userMoved":
        for(let user of this.rooms.users) {
          if(user.uuid === packet.userMoved.uuid) {
            const room = this.rooms.byName(user.room);
            room.users = room.users.filter(u => u.uuid !== user.uuid)

            const newRoom = this.rooms.byName(packet.userMoved.room);
            newRoom.users.push(user);
            user.room = newRoom.name;
          }
        }
        if(packet.userMoved.uuid === this.rooms.localUUID) {
          this.chat.clear();
        }
        break;
      case "roomCreated":
        this.rooms.rooms.push(new Room({name: packet.roomCreated.name, users: []}));
        break;
      case "roomClosed":
        this.rooms.rooms = this.rooms.rooms.filter(room => room.name !== packet.roomClosed.name);
        break;
      case "textMessage":
        this.chat.addText(packet.textMessage);
        break;
      default:
        throw new Error("Unknown message type: "+packet.content);
    }
  }
}
