import User from "../rooms/user";
import {ChatMessage} from "../../proto/proto";

export default class Message{
  public author: User;
  public text: string;
  public file: ChatMessage.IFileHeader;
  public thumbnail: string;

  constructor(author, text, file) {
    this.author = author;
    this.text = text;
    this.file = file;
    if(this.file.thumbnail.length > 0) {
      this.thumbnail = "data:image/jpeg;base64," + btoa(this.file.thumbnail.reduce((data, byte) => data + String.fromCharCode(byte), ''));
    }
  }


}
