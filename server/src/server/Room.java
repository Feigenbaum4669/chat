package server;

import java.util.HashSet;
import java.util.Set;

class Room {
	
String name;
private RoomManager rm;
Set<User> users;
boolean temp;

public Room(RoomManager rm, String name) {
    this.rm = rm;
    this.name = name;

    this.users = new HashSet<User>();
    this.temp = true;
}

public void remove(User user) {
    this.users.remove(user);
    if(this.users.size() == 0 && this.temp) {
        this.rm.remove(this);
    }
}

public void add(User user) {
    this.users.add(user);
}

public void broadcast(byte[] msg) {
	for(User u:users) {
		u.send(msg);
	}
}

}




   

