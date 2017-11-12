import { Injectable } from '@angular/core';
import { IServerStatus } from "../../proto/proto";
import Room from "./room";
import User from "./user";

@Injectable()
export class RoomsProvider {
  localUUID: string;
  rooms: Array<Room> = [];

  constructor() {

  }

  public init(rs: IServerStatus) {
    this.localUUID = rs.yourUUID;
    this.rooms = rs.rooms.map(room => new Room(room));
    for(let user of this.users) {
      if(user.uuid === this.localUUID){
        user.local = true;
      }
    }
  }

  public byName(name: string): Room {
    return this.rooms.find(room => room.name === name);
  }

  get currentRoom(): Room {
    return this.rooms.find(room => room.users.some(user => user.uuid === this.localUUID));
  }

  get users(): User[] {
    return this.rooms.flatMap((room: Room) => [...room.users]);
  }
}
