package server;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketError;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import com.google.protobuf.ByteString;


	
	@WebSocket(maxIdleTime=100000)
	public class ChatWebSocketHandler {
		
		
		private RoomManager rm;
		private UserManager um;
		private HashMap<String,String> filenames;
		
		public ChatWebSocketHandler() {
			this.um = new UserManager();
	        this.rm = new RoomManager(this);
	        filenames= new HashMap<String,String>();
		}

	    @OnWebSocketClose
	    public void onClose(Session session, int statusCode, String reason) {
	        System.out.println("Close: statusCode=" + statusCode + ", reason=" + reason);
	        
             this.um.terminate(session);
             User us=this.um.Sessionusers.get(session);
             if(us!=null) {
                broadcastUserDisconnected(us.uuid, reason);
             }
            
	    }

	    @OnWebSocketError
	    public void onError(Session session,Throwable t) {
	        System.err.println("Error: " + t.getMessage());
	        try {
				session.close();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				System.err.println("Error when attempting to close session: " + e.getMessage());
			}
	        /*cs.shutdown();*/
	    }

	    @OnWebSocketConnect
	    public void onConnect(Session session) {
	        System.out.println("New user connected: " + session.getRemoteAddress().getHostString());
	        /*
	        try {
	            session.getRemote().sendString("Hello Webbrowser");
	        } catch (IOException e) {
	            e.printStackTrace();
	        }*/
	    }

	    @OnWebSocketMessage
	    public void onMessage(Session session, byte[] b, int offset, int length) throws IOException {
	    	 proto.Protocol.Packet packet = null;
			    ByteBuffer bb=ByteBuffer.wrap(b,offset,length);
				packet = proto.Protocol.Packet.parseFrom(bb);
				
			
		
			
	    		User usr=this.um.findUserSession(session);

	            if(packet.getHandshake()!=null && usr!=null) {
	            	System.out.println("MSG: handshake, known user ");
	            	session.close(0, "Double handshake.");
	            } else if(packet.getHandshake()==null && usr==null) {
	            	System.out.println("MSG: not handshake, unknown user ");
	            	session.close(0,"You need to send Handshake first");
	            } else if(packet.getHandshake()!=null && usr==null) {
	            	
	            	System.out.println("MSG: handshake, unknown user ");
	                User user = new User(packet.getHandshake().getUsername(), session);
	                this.um.add(user);
	                broadcastUserConnected(user.uuid, user.username, this.rm.lobby.name);
	                user.moveTo(this.rm.lobby);
	                proto.Protocol.ServerStatus ss=ProtoUtils.ServerStatus(this.rm, user.uuid);
	                System.out.println(ss.toString());
	                System.out.println("Sending server status "+user.username);
	                user.send(ss.toByteArray());
	                
	                
	            } else if (usr!=null) {
	                this.handlePacket(packet, usr);
	            }
	    }
	    
	    public void handlePacket(proto.Protocol.Packet packet, User user) throws IOException {
	    	
	    	if(packet.getJoinRoom()!=null) {
	    		System.out.println("MSG: JoinRoom "+user.username);
	    		Room room = this.rm.get(packet.getJoinRoom().getName());
                broadcastUserMoved(user.uuid, room.name);
                user.moveTo(room);
               
	    		
	    	}else if(packet.getRequestFile()!=null){
	    		System.out.println("MSG: ReuestFile "+user.username);
	    		String fname=filenames.get(packet.getRequestFile().getUuid());
	    		String uuid=packet.getRequestFile().getUuid();
	    		if(fname==null) {
	    			System.out.println("ReuestFile: no such file "+user.username);
	    			return;
	    		}
	    		Path fileLocation=Paths.get("./imgs/"+uuid+".jpg");
	    		byte[] fdatab = Files.readAllBytes(fileLocation);
	    		ByteString fdatabs=ByteString.copyFrom(fdatab);
	    		proto.Protocol.RequestedFile rf = proto.Protocol.RequestedFile.newBuilder().setFilename(fname).setUuid(uuid).setContent(fdatabs).build();
	    		byte[] msg=rf.toByteArray();
	    		user.send(msg);
	    		
	    		
	    	}else if(packet.getChatMessage()!=null) {
	    		
	    		proto.Protocol.ChatMessage.Builder cmsgb=proto.Protocol.ChatMessage.newBuilder().setUserUUID(user.uuid.toString());
	    		cmsgb.setTextMessage(packet.getChatMessage().getTextMessage());
	    		proto.Protocol.ChatMessage cmsg=null;
	    		if(packet.getChatMessage().getFullFile()!=null) {
	    		System.out.println("MSG: ChatMessage+fullFile "+user.username);
	    		String uuid=UUID.randomUUID().toString();
                byte[] bytes=packet.getChatMessage().getFullFile().toByteArray();
                BufferedImage image = ImageIO.read(new ByteArrayInputStream(bytes));
                BufferedImage thumbnail = new BufferedImage(100, 100, BufferedImage.TYPE_INT_RGB);
                thumbnail.createGraphics().drawImage(image.getScaledInstance(100, 100, Image.SCALE_SMOOTH),0,0,null);
                ImageIO.write(image, "jpg", new File("./imgs/"+uuid+".jpg"));
                filenames.put(uuid.toString(),packet.getChatMessage().getFullFile().getFilename());
                
                ByteArrayOutputStream baos = new ByteArrayOutputStream();
            	ImageIO.write( thumbnail, "jpg", baos );
            	baos.flush();
            	byte[] thbba = baos.toByteArray();
            	baos.close();
                
                ByteString thbbs=ByteString.copyFrom(thbba);
                		
                proto.Protocol.ChatMessage.FileHeader fhd=proto.Protocol.ChatMessage.FileHeader.newBuilder().setUuid(uuid).setFilename(packet.getChatMessage().getFullFile().getFilename()).setThumbnail(thbbs).build();
                cmsg=cmsgb.setFileHeader(fhd).build();

	
	    		}else {
	    			System.out.println("MSG: ChatMessage+ no fullFile "+user.username);
	    			cmsg=cmsgb.build();
	    			
	    		}
	    		user.room.broadcast(cmsg.toByteArray());
	    		
	    	}else {
	    		System.err.println("Error: received unknown message (outside protocol): "+user.username);
	    	}
	    	
	    }
	    
	    
	    
	    public void broadcastUserDisconnected(UUID uuid, String reason) {
	    	System.out.println("BroadcastUserDisonnected "+reason);	
	    proto.Protocol.UserDisconnected msg =	proto.Protocol.UserDisconnected.newBuilder().setUuid(uuid.toString()).setReason(reason).build();
	    byte[] bMsg=msg.toByteArray();
	    this.um.broadcastByte(bMsg);
	    	
	    }
	    
	    public void broadcastUserConnected(UUID uuid, String username, String lobbyName) {
	    	System.out.println("BroadcastUserConnected "+username);
	    	proto.Protocol.UserConnected msg =	proto.Protocol.UserConnected.newBuilder().setUuid(uuid.toString()).setUsername(username).setRoom(lobbyName).build();
	    	System.out.println(msg.toString());
	    	 byte[] bMsg=msg.toByteArray();
	    	 this.um.broadcastByte(bMsg);
	    	// this.um.broadcastString(msg.toString());
	    }
	    
	    public void broadcastUserMoved(UUID uuid, String roomName) {
	    	System.out.println("BroadcastUserMoved "+uuid.toString()+" "+roomName);
	    	proto.Protocol.UserMoved msg =	proto.Protocol.UserMoved.newBuilder().setRoom(roomName).build();
	    	 byte[] bMsg=msg.toByteArray();
	    	 this.um.broadcastByte(bMsg);
	    	 
	    }
	    
		public void broadcastRoomCreated(String roomName) {
			System.out.println("BroadcastRoomCreated "+roomName);
			proto.Protocol.RoomCreated msg =	proto.Protocol.RoomCreated.newBuilder().setName(roomName).build();
			 byte[] bMsg=msg.toByteArray();
			 this.um.broadcastByte(bMsg);
	    }
	    
		public void broadcastRoomClosed(String roomName) {
			System.out.println("BroadcastRoomClosed "+roomName);
			proto.Protocol.RoomClosed msg =	proto.Protocol.RoomClosed.newBuilder().setName(roomName).build();
			 byte[] bMsg=msg.toByteArray();
			 this.um.broadcastByte(bMsg);
	    }
	    
	    
	    
	}
	
	   


