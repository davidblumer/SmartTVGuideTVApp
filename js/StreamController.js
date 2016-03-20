/* global app */
angular.module('smartGuide').controller('StreamController', function (
      $log
    , $rootScope
    , $scope
    , $timeout
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
        },
        {
            date:  new Date(),
            icon:  'bar-chart',
            link:  '',
            options: [
                {
                    votes: 20,
                    title: 'Ja'
                },
                {
                    votes: 14,
                    title: 'Glaube schon'
                },
                {
                    votes: 5,
                    title: 'Nein'
                }
            ],
            pollId: 'testPoll',
            text:  '',
            title: 'Ist das eine Umfrage?',
            type:  'poll',
            votes: 39
        },
        {
            date:  new Date(),
            icon:  'info-circle',
            link:  '',
            text:  'noch 3:00 Minuten',
            title: 'Präsentation läuft',
            type:  'info'
        },
        {
            date:  new Date(),
            icon:  'github',
            link:  'https://github.com/SocialbitGmbH/SmartTVGuideRNA',
            text:  'ReactNative-App',
            title: 'SmartTVGuideRNA',
            type:  'github'
        },
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

        StreamSocket.switchChannel('PRO7');
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

    $scope.$on('socket:pair_disconnected', function (event, data) {
        $log.log('ChatsController: pair_disconnected', event, data);

        $scope.setDisconnected();
    });

    $scope.$on('socket:receive_switch_channel', function (event, data) {
        $log.log('ChatsController: receive_switch_channel', event, data);


    });

    $scope.$on('socket:hide_guide', function (event, data) {
        $log.log('ChatsController: hide_guide', event, data);

        $scope.eventsVisible = false;
    });

    $scope.$on('socket:show_guide', function (event, data) {
        $log.log('ChatsController: show_guide', event, data);

        $scope.eventsVisible = true;
    });

    $scope.$on('socket:receive_message', function (event, data) {
        $log.log('ChatsController: receive_message', event, data);

        var newChatEntry = {
            date:  new Date(),
            icon:  'comments',
            link:  '',
            text:  data.message,
            title: 'Michael Malura',
            type:  'chat'
        };

        $scope.addEntry(newChatEntry);
    });



    $scope.$on('socket:create_vote', function (event, data) {
        $log.log('ChatsController: create_vote', event, data);

        var options = [];

        for (var key in data.options)
        {
            var newOption = {
                title: data.options[key],
                votes: 0
            };

            options.push(newOption);
        }

        if (options.length < 2)
        {
            return false;
        }

        var newVote = {
            date:    new Date(),
            icon:    'bar-chart',
            link:    '',
            options: options,
            pollId:  guid(),
            text:    '',
            title:   data.title,
            type:    'poll',
            votes:    0
        };

        $scope.addEntry(newVote);

        StreamSocket.newVote(newVote);
    });

    $scope.$on('socket:vote', function (event, data) {
        $log.log('ChatsController: vote', event, data);

        var pollId = data.id;

        for (var key in $scope.data)
        {
            var entry = $scope.data[key];

            if (entry.type == 'poll' && entry.pollId == pollId)
            {
                ++entry.options[data.optionIndex].votes;
                ++entry.votes;

                return;
            }
        }
    });

    $rootScope.$on('fake_connection', function()
    {
        $scope.setConnected();
    });

    $scope.addEntry = function (data)
    {
        $scope.data.push(data);

        $scope.scrollToBottom();
    };

    $scope.eventsHide = function()
    {
        $scope.eventsVisible = false;
    };

    $scope.eventsShow = function()
    {
        $scope.eventsVisible = true;
    };

    $scope.scrollToBottom = function()
    {
        $timeout(function()
        {
            var content = $('#content');
            content.scrollTop(content.prop('scrollHeight'));
        }, 1);
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

    $scope.setDisconnected = function()
    {
        $scope.connected = false;
    };

    $('#qrcodeImage').qrcode({
        text: DeviceManager.getId()
    });
});