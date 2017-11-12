import { Injectable } from '@angular/core';
import Message from "./Message";
import {ITextMessage} from "../../proto/proto";
import {RoomsProvider} from "../rooms/rooms";

@Injectable()
export class ChatProvider {
  public messages: Array<Message> = [];

  constructor(public rooms: RoomsProvider) {

  }

  public addText(message: ITextMessage) {
    const author = this.rooms.users.find(user => user.uuid === message.userUUID);
    this.messages.push(new Message(author, message.message));
  }

  public clear() {
    this.messages = [];
  }
}
