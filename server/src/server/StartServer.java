package server;

public class StartServer {
	
	
	//TODO: dokończyć
	/*
	process.on('unhandledRejection', (reason, p) => {
	    console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
	});

	global.error = null; // protobufjs fix
	*/
	
		public static void main(String args[]) throws Exception {
			new ChatServer(3940);
			
		

}
}





