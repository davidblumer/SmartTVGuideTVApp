/* global app */
angular.module('smartGuide').controller('DebugController', function (
      $log
    , $rootScope
    , $scope
)
{
    $scope.commands = [



        {
            data: null,
            event: 'socket:beard_show'
        },
        {
            data: null,
            event: 'socket:beard_hide'
        },
        {
            data: { x: 10, y: 20 },
            event: 'socket:beard_set_position'
        },
        {
            data: { r: 20 },
            event: 'socket:beard_set_rotation'
        },
        {
            data: { z: 2 },
            event: 'socket:beard_set_zoom'
        },
        {
            data: null,
            event: 'socket:events_show'
        },
        {
            data: null,
            event: 'socket:events_hide'
        },
        {
            data: { i: 2 },
            event: 'socket:beard_set_index'
        },
        {
            data: { title: 'Neue Umfrage?', options: [ 'Ja', 'Nein', 'Vielleicht'] },
            event: 'socket:create_vote'
        },
        {
            data: { id: 'testPoll', optionIndex: 2 },
            event: 'socket:vote'
        },




        {
            data: null,
            event: 'fake_connection'
        }
    ];

    $scope.runCommand = function (command)
    {
        $log.log('Faking event: ', command);

        $rootScope.$broadcast(command.event, command.data);
    };


    /*
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

     */

});