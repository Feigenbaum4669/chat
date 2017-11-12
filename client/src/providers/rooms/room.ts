import User from "./user";
import {ServerStatus} from "../../proto/proto";

export default class Room {
  public name: string;
  public users: Array<User> = [];
  public room: true;

  constructor(room: ServerStatus.IRoom) {
    this.name = room.name;
    this.users = room.users.map(user => new User(user));
  }
}
