package server;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.eclipse.jetty.websocket.api.Session;

public class UserManager {
	
public Map<UUID, User> UUIDusers;
public Map<Session, User> Sessionusers;

public UserManager() {
    this.UUIDusers = new HashMap<UUID, User>();
    this.Sessionusers = new HashMap<Session, User>();
}

public void remove(User user) {
    this.UUIDusers.remove(user.uuid);
    this.Sessionusers.remove(user.ws);
    user.um = null;
}

public void add(User user) {
    this.UUIDusers.put(user.uuid, user);
    this.Sessionusers.put(user.ws, user);
    user.um = this;
}

public void terminate(Session session) {
	User u=this.Sessionusers.get(session);
	if(u!=null) {
		u.terminate();
		this.UUIDusers.remove(u.uuid);
		this.Sessionusers.remove(u.ws);
	}
}

public User findUserSession(Session s) {
	User ret=null;
	if(this.Sessionusers.get(s)!=null) {
		ret=this.Sessionusers.get(s);
	}
	return ret;
}

public void broadcastByte(byte[] msg) {
	for (User u : UUIDusers.values()){
		u.send(msg);
	}
		
}

public void broadcastString(String msg) {
	for (User u : UUIDusers.values()){
		u.sendString(msg);
	}
		
}
}

