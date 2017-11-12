
import {IUserConnected} from "../../proto/proto";
export default class User {
  public uuid: string;
  public name: string;
  public room: string;
  public local: boolean;

  constructor(user: IUserConnected) {
    this.uuid = user.uuid;
    this.name = user.username;
    this.room = user.room;
    this.local = false;
  }
}
