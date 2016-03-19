app.factory('StreamSocket', function (
      $log
    , socketFactory
) {
    $log.log('ChatSocket: initializing');

    var ChatSocketIO = io.connect('http://3b4fbd96.ngrok.com', { query: 'type=tv&udid=' + guid() } );
    var ChatSocket   = socketFactory({
        ioSocket: ChatSocketIO
    });

    ChatSocket.forward('error');
    ChatSocket.forward('connect');
    ChatSocket.forward('connect_error');
    ChatSocket.forward('disconnect');
    ChatSocket.forward('reconnect_attempt');
    ChatSocket.forward('reconnect_error');
    ChatSocket.forward('reconnect_failed');
    ChatSocket.forward('reconnecting');
    ChatSocket.forward('unauthorized');
    ChatSocket.forward('receive_code');




    ChatSocket.requestCode = function ()
    {
        $log.log('ChatSocket: request_code');

        ChatSocketIO.emit('request_code');
    };


    return ChatSocket;
});