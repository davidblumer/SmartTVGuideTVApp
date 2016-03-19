/* global app */
angular.module('smartGuide').controller('StreamController', function (
      $log
    , $rootScope
    , $scope
    , DeviceManager
    , StreamSocket
)
{
    $scope.connected = false;

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

    $scope.eventsVisible = true;

    $scope.selectedDataIndex = -1;

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

    $scope.$on('socket:connected', function (event, data) {
        $log.log('ChatsController: connected', event, data);


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

        $scope.setConnected();
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

    $scope.$on('socket:selection_down', function (event, data) {
        $log.log('ChatsController: selection_down', event, data);

        $scope.selectionDown();
    });

    $scope.$on('socket:selection_up', function (event, data) {
        $log.log('ChatsController: selection_up', event, data);

        $scope.selectionUp();
    });

    $scope.$on('socket:selection_click', function (event, data) {
        $log.log('ChatsController: selection_click', event, data);

        $scope.selectionClick();
    });

    $scope.$on('socket:selection_remove', function (event, data) {
        $log.log('ChatsController: selection_remove', event, data);

        $scope.selectionRemove();
    });

    $scope.$on('socket:events_hide', function (event, data) {
        $log.log('ChatsController: events_show', event, data);

        $scope.eventsHide();
    });

    $scope.$on('socket:events_show', function (event, data) {
        $log.log('ChatsController: events_show', event, data);

        $scope.eventsShow();
    });

    $rootScope.$on('fake_connection', function()
    {
        $scope.setConnected();
    });

    $scope.eventsHide = function()
    {
        $scope.eventsVisible = false;
    };

    $scope.eventsShow = function()
    {
        $scope.eventsVisible = true;
    };

    $scope.selectionClick = function()
    {

    };

    $scope.selectionDown = function()
    {
        ++$scope.selectedDataIndex;

        if ($scope.selectedDataIndex >= $scope.data.length)
        {
            $scope.selectedDataIndex = 0;
        }
    };

    $scope.selectionUp = function()
    {
        --$scope.selectedDataIndex;

        if ($scope.selectedDataIndex < 0)
        {
            $scope.selectedDataIndex = $scope.data.length - 1;
        }
    };

    $scope.selectionRemove = function()
    {
        $scope.selectedDataIndex = -1;
    };

    $scope.setConnected = function()
    {
        $scope.connected = true;
    };




    // Closed-style?
    // Bart api


    $('#qrcodeImage').qrcode({
        text: DeviceManager.getId()
    });
});