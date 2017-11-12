import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import Room from "../../providers/rooms/room";
import {RoomsProvider} from "../../providers/rooms/rooms";
import {ConnectionProvider} from "../../providers/connection/connection";
import {ChatProvider} from "../../providers/chat/chat";

@Component({
  selector: 'page-list',
  templateUrl: 'server.html'
})
export class ServerPage {
  public message: string;

  constructor(public roomsProvider: RoomsProvider, public connection: ConnectionProvider, public chat: ChatProvider) {

  }

  public keyPressed(key) {
    if(key === 13) {
      this.send();
    }
  }

  public async send() {
    await this.connection.send({textMessage: {message: this.message}});
    this.message = "";
  }

  public get room(): Room {
    return this.roomsProvider.currentRoom;
  }

  public get rooms(): Array<Room> {
    return this.roomsProvider.rooms;
  }
}
