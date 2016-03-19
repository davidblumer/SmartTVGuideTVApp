/* global app */
angular.module('smartGuide').controller('StreamController', function (
      $log
    , $rootScope
    , $scope
    , StreamSocket
)
{
    $scope.data = [];

    $scope.data = [
        {
            date:  new Date(),
            icon:  'comments',
            link:  '',
            text:  'Bla bla bla',
            title: 'titel',
            type:  'chat'
        },
        {
            date:  new Date(),
            icon:  'twitter',
            link:  'http://twitter.com/url/zum/tweet',
            text:  'Bla bla bla',
            title: 'titel',
            type:  'twitter'
        },
        {
            date:  new Date(),
            icon:  'shopping-cart',
            link:  'http://weg.de/kaufen',
            text:  '',
            title: 'titel',
            type:  'affiliate'
        },
        {
            date:  new Date(),
            icon:  'long-arrow-right',
            link:  '',
            text:  '',
            title: 'TekiKeki ist PRO7 beigetreten',
            type:  'joined'
        },
        {
            date:  new Date(),
            icon:  'long-arrow-left',
            link:  '',
            text:  '',
            title: 'TekiKeki hat PRO7 verlassen',
            type:  'left'
        }
    ];

    $scope.users = [
        {
            name: 'test'
        },
        {
            name: 'test'
        }
    ];


    $scope.$on('socket:error', function (event, data) {
        $log.log('ChatsController: error', event, data);


    });

    $scope.$on('socket:connect', function (event, data) {
        $log.log('ChatsController: connect', event, data);


    });

    $scope.$on('socket:connect_error', function (event, data) {
        $log.log('ChatsController: connect_error', event, data);


    });

    $scope.$on('socket:disconnect', function (event, data) {
        $log.log('ChatsController: disconnect', event, data);


    });

    $scope.$on('socket:reconnect_attempt', function (event, data) {
        $log.log('ChatsController: reconnect_attempt', event, data);


    });

    $scope.$on('socket:reconnect_error', function (event, data) {
        $log.log('ChatsController: reconnect_error', event, data);


    });

    $scope.$on('socket:reconnect_failed', function (event, data) {
        $log.log('ChatsController: reconnect_failed', event, data);


    });

    $scope.$on('socket:reconnecting', function (event, data) {
        $log.log('ChatsController: reconnecting', event, data);


    });

    $scope.$on('socket:unauthorized', function (event, data) {
        $log.log('ChatsController: unauthorized', event, data);


    });

    $scope.$on('socket:receive_code', function (event, data) {
        $log.log('ChatsController: receive_code', event, data);


    });

    $scope.$on('socket:user_joined', function (event, data) {
        $log.log('ChatsController: user_joined', event, data);

        $scope.users.push(data.user);
    });

    $scope.$on('socket:user_left', function (event, data) {
        $log.log('ChatsController: user_left', event, data);

        var userIndex = $scope.users.indexOf(data.user);

        if (userIndex > -1)
        {
            $scope.users.splice(userIndex, 1);
        }
    });



    // Closed-style?
    // api für selection
    // setting for show/hide join/left
    // Fernbedienung einbauen

});