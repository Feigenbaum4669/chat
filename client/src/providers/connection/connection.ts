import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket'
import proto from '../../proto/proto';
import b2b from 'blob-to-buffer';
import {PacketHandlerProvider} from "../packet-handler/packet-handler";

@Injectable()
export class ConnectionProvider {
  ws: $WebSocket;

  public onClose: Function;
  public onError: Function;

  constructor(public packetHandler: PacketHandlerProvider) {

  }

  async connect(address: string, username: string) {
    let [ip, port] = [...address.split(":"), "3939"];

    this.ws = new $WebSocket(`ws://${ip}:${[port]}`);
    this.ws.onClose((...args) => {
      if(this.onClose) this.onClose(...args);
      else throw args[0]
    });
    this.ws.onError((...args) => {
      if(this.onError) this.onError(...args);
      else throw args[0]
    });
    this.ws.setSend4Mode(WebSocketSendMode.Promise);
    this.ws.onMessage(async msg => {
      const packet = proto.Packet.decode(await ConnectionProvider.toBuffer(msg.data));

      this.packetHandler.handle(packet);
    });

    await this.send({handshake: {username}}).catch(err => this.ws.onErrorHandler(err));
  }

  async send(message: proto.IPacket) {
    const packet = new proto.Packet(message);

    await this.ws.send(proto.Packet.encode(packet).finish(), WebSocketSendMode.Promise, true).catch(err => this.ws.onErrorHandler(err));
  }

  static toBuffer(blob: Blob): Promise<Buffer> {
    return new Promise((acc, rej) => {
      b2b(blob, (err, buf) => {
        if(err) rej(err);
        acc(buf);
      });
    });
  }
}
