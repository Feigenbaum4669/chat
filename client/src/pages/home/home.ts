import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionProvider } from '../../providers/connection/connection';
import {ServerPage} from "../server/server";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ip: string;
  username: string;

  constructor(public navCtrl: NavController, public connection: ConnectionProvider) {
    this.ip = "127.0.0.1:3939";
    this.username = "Guest";
  }

  async connect() {
    await this.connection.connect(this.ip, this.username);
    await this.navCtrl.setRoot(ServerPage);
  }
}
