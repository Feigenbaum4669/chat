import { Component } from '@angular/core';
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
  public file: File;
  public fileContent: ArrayBuffer;

  constructor(public roomsProvider: RoomsProvider, public connection: ConnectionProvider, public chat: ChatProvider) {

  }

  public keyPressed(key) {
    if(key === 13) {
      this.send();
    }
  }

  public async send() {
    if(this.fileContent) {
      await this.connection.send({chatMessage: {
        textMessage: this.message,
        fullFile: {
          filename: this.file.name,
          content: new Uint8Array(this.fileContent)
        }
      }});
    } else {
      await this.connection.send({chatMessage: {
        textMessage: this.message,
      }});
    }
    this.message = "";
    this.removeFile();
  }

  public async pickFile() {
    document.getElementById('filePicker').click();
  }

  public fileChange(ev: any){
    if (ev.target.files && ev.target.files[0]) {
      this.attachFile(ev.target.files[0])
    }
  }

  public attachFile(file: File){
    this.file = file;
    delete this.fileContent;

    const reader = new FileReader();

    reader.onload = (e : any) => {
      this.fileContent = e.target.result;
    };

    reader.readAsArrayBuffer(file);
  }

  public removeFile(){
    delete this.file;
    delete this.fileContent;
  }

  public async download(uuid) {
    await this.connection.send({requestFile: { uuid }});
  }

  public get room(): Room {
    return this.roomsProvider.currentRoom;
  }

  public get rooms(): Array<Room> {
    return this.roomsProvider.rooms;
  }
}
