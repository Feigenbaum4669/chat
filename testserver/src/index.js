import Server from './Server';

process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

global.error = null; // protobufjs fix

new Server(3939);
