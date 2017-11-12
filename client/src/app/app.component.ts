import { Component, ViewChild } from '@angular/core';
import {AlertController, Nav, Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ConnectionProvider} from "../providers/connection/connection";
import {RoomsProvider} from "../providers/rooms/rooms";
import Room from "../providers/rooms/room";
import User from "../providers/rooms/user";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public connection: ConnectionProvider, public toastCtrl: ToastController,
              public roomsProvider: RoomsProvider, public alertCtrl: AlertController) {
    this.initializeApp();

    connection.onError = err => {
      console.error(err);
      toastCtrl.create({
        message: err.message
      });
    };
    connection.onClose = () => this.nav.setRoot(HomePage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public get menuRows(): (Room|User)[] {
    return this.roomsProvider.rooms.flatMap((room: Room) => [room, ...room.users]);
  }

  public roomChange(room: Room) {
    this.connection.send({ joinRoom: { name: room.name } });
  }

  public disconnect() {
    this.connection.ws.close();
  }

  public newRoom() {
    let alert = this.alertCtrl.create({
      title: 'Create New Room',
      inputs: [
        {
          name: 'roomname',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create',
          handler: data => {
            if (data !== "") {
              this.connection.send({ joinRoom: { name: data.roomname } });
            } else {
              return false;
            }
          }
        }
      ]
    });
    alert.present();
  }
}

