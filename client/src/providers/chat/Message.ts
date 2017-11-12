import User from "../rooms/user";

export default class Message{
  public author: User;
  public text: string;

  constructor(author, text) {
    this.author = author;
    this.text = text;
  }


}
