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
    ChatSocket.forward('user_joined');
    ChatSocket.forward('user_left');
    ChatSocket.forward('selection_down');
    ChatSocket.forward('selection_click');
    ChatSocket.forward('selection_up');
    ChatSocket.forward('selection_remove');




    ChatSocket.requestCode = function ()
    {
        $log.log('ChatSocket: request_code');

        ChatSocketIO.emit('request_code');
    };


    return ChatSocket;
});