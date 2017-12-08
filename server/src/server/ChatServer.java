package server;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.websocket.server.WebSocketHandler;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;


public class ChatServer {
	
	private WebSocketHandler wsh;
	private Server wss;
	public ChatServer(Integer port) throws Exception {
        runServer(port);	
	}
        
private void runServer(Integer port) throws Exception {
	
	 this.wsh=new WebSocketHandler() {
			
			@Override
			public void configure(WebSocketServletFactory factory) {
				factory.register(ChatWebSocketHandler.class);
			    factory.getPolicy().setIdleTimeout(100000);
			}
		};
		
		
		this.wss=new Server(port);
		this.wss.setHandler(this.wsh);
		this.wss.start();
		this.wss.join();
	System.out.println("Server started at port "+port);
}

public void shutdown() throws Exception {
	wss.stop();
	System.exit(1);
}
}
	
	






     


    

