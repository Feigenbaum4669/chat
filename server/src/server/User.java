package server;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.util.UUID;

import org.eclipse.jetty.websocket.api.Session;

public class User {

UUID uuid;
String username;
 Room room;
UserManager um; 
 Session ws; //type?

public User(String username, Session ws){
this.uuid=UUID.randomUUID();
this.username=username;
this.ws=ws;
this.room=null;
this.um=null;//null na inicjalizację
}

public void moveTo(Room newRoom) {
	if(this.room!=null) {
		this.room.remove(this);
	}
	this.room=newRoom;
	this.room.users.add(this);
	System.out.println(this.username + " moved to " + this.room.name);
	

}

//TODO: promise!//

public void send(byte[] msg) {

	System.out.println("Sending bytes to user: " + this.username);
	 //byte[] bytes = new byte[msg.length];
	   ByteBuffer buffer = ByteBuffer.wrap(msg);
	
	   //buffer.get(msg, 0, msg.length);
	//final ByteBuffer bb=ByteBuffer.wrap(msg);
	
	
   try {
	this.ws.getRemote().sendBytes(buffer);
	
	
	
} catch (IOException e) {
	// TODO Auto-generated catch block
	System.err.println("Error when attempting to send byte packet: " + e.getMessage());
}
}

public void sendString(String msg) {

   try {
	this.ws.getRemote().sendString(msg);
} catch (IOException e) {
	// TODO Auto-generated catch block
	System.err.println("Error when attempting to send string message: " + e.getMessage());
}
}


public void terminate() {
    if(this.room!=null) {
        this.room.remove(this);
    }
    if(this.um!=null) {
        this.um.remove(this);
    }
}



   
}
