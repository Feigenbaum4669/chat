package server;

import java.util.HashSet;
import java.util.UUID;

import proto.Protocol.ServerStatus.Builder;

public class ProtoUtils {
	
public static proto.Protocol.ServerStatus ServerStatus(RoomManager rm, UUID localUUID) {
	

	
	Builder ssb=proto.Protocol.ServerStatus.newBuilder().setYourUUID(localUUID.toString());
	
	HashSet<proto.Protocol.ServerStatus.Room> allR=new HashSet<proto.Protocol.ServerStatus.Room>();
	for(Room room:rm.rooms.values()) {
		
		proto.Protocol.ServerStatus.Room.Builder rb=proto.Protocol.ServerStatus.Room.newBuilder().setName(room.name);
		HashSet<proto.Protocol.UserConnected> allUC=new HashSet<proto.Protocol.UserConnected>();
		for(User user:room.users) {
			allUC.add(proto.Protocol.UserConnected.newBuilder().setUuid(user.uuid.toString()).setRoom(room.name).setUsername(user.username).build());
		}
		proto.Protocol.ServerStatus.Room r=rb.addAllUsers(allUC).build();
		allR.add(r);
	}
	
	return ssb.addAllRooms(allR).build();
	

}
}





