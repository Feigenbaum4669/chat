package server;

import java.util.HashMap;
import java.util.Map;

public class RoomManager {
	
	private ChatWebSocketHandler server;
	public Map<String, Room> rooms;
	Room lobby;
	
	 public RoomManager(ChatWebSocketHandler server) {
	        this.server = server;
	        this.rooms = new HashMap<String, Room>();
	        this.lobby = new Room(this, "Lobby");
	        this.lobby.temp = false;
	        this.add(this.lobby);
	    }

	    public void remove(Room room) {
	        this.rooms.remove(room.name);
	        this.server.broadcastRoomClosed(room.name);
	    }

	    public void add(Room room) {
	        this.rooms.put(room.name, room);
	        this.server.broadcastRoomCreated(room.name);
	    }

	    public Room get(String name) {
	        Room room = this.rooms.get(name);
	        if(room!=null) {
	            return room;
	        }
	        room = new Room(this, name);
	        this.add(room);
	        return room;
	    }
	    
	    

}






   
