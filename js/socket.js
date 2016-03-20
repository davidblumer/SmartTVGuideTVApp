app.factory('StreamSocket', function (
      $log
    , DeviceManager
    , socketFactory
) {
    $log.log('ChatSocket: initializing');

    var ChatSocketIO = io.connect('http://3b4fbd96.ngrok.com', { query: 'type=tv&udid=' + DeviceManager.getId() } );
    var ChatSocket   = socketFactory({
        ioSocket: ChatSocketIO
    });

    ChatSocket.forward('error');
    ChatSocket.forward('connect');
    ChatSocket.forward('connect_error');
    ChatSocket.forward('connected');
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
    ChatSocket.forward('events_show');
    ChatSocket.forward('events_hide');
    ChatSocket.forward('beard_show');
    ChatSocket.forward('beard_hide');
    ChatSocket.forward('beard_set_position');
    ChatSocket.forward('beard_set_rotation');
    ChatSocket.forward('beard_set_zoom');
    ChatSocket.forward('beard_set_index');
    ChatSocket.forward('pair_disconnected');
    ChatSocket.forward('receive_switch_channel');
    ChatSocket.forward('create_vote');
    ChatSocket.forward('vote');
    ChatSocket.forward('show_guide');
    ChatSocket.forward('hide_guide');



    ChatSocket.newVote = function (vote)
    {
        $log.log('ChatSocket: new_vote');

        ChatSocketIO.emit('new_vote', vote);
    };


    ChatSocket.requestCode = function ()
    {
        $log.log('ChatSocket: request_code');

        ChatSocketIO.emit('request_code');
    };

    ChatSocket.switchChannel = function (channel)
    {
        $log.log('ChatSocket: switch_channel');

        ChatSocketIO.emit('switch_channel', { channel: channel });
    };


    return ChatSocket;
});