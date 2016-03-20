/* global app */
angular.module('smartGuide').controller('DebugController', function (
      $log
    , $rootScope
    , $scope
    , $timeout
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
            event: 'socket:hide_guide'
        },
        {
            data: null,
            event: 'socket:show_guide'
        },
        {
            data: null,
            event: 'socket:new_content'
        },

        {
            data: null,
            event: 'presentation'
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

    $rootScope.$on('presentation', function()
    {
        $rootScope.$broadcast('socket:new_content', {
            date:  new Date(),
            icon:  'heart',
            link:  '',
            text:  'We hope you are feeling good',
            title: 'Much love',
            type:  'info'
        });

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'info-circle',
                link:  '',
                text:  'I just need about 3 minutes',
                title: 'Lets go',
                type:  'info'
            });
        }, 5 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'frown-o',
                link:  '',
                text:  'Watching tv may be boring',
                title: 'Boring',
                type:  'info'
            });
        }, 10 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'mobile',
                link:  '',
                text:  'Everyone has a smartphone',
                title: 'Second screen',
                type:  'info'
            });
        }, 15 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'television',
                link:  '',
                text:  'Back to the tv',
                title: 'Change focus',
                type:  'info'
            });
        }, 20 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'globe',
                link:  '',
                text:  'Relevant content on the tv screen',
                title: 'Content',
                type:  'info'
            });
        }, 22 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'arrows-h',
                link:  '',
                text:  'So our middleware can generate data',
                title: 'TV tells its channel',
                type:  'info'
            });
        }, 27 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'bomb',
                link:  '',
                text:  'Big bang theory',
                title: 'Example content',
                type:  'info'
            });
        }, 32 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'comments',
                link:  '',
                text:  'So watching tv is kinda live experience',
                title: 'Users can chat',
                type:  'info'
            });
        }, 37 * 1000);

        // Malura chattet 1-2 Sätze

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'database',
                link:  '',
                text:  'To get tv show data',
                title: 'http://www.ericsson.com',
                type:  'info'
            });
        }, 47 * 1000);

        // Malura postet was zu bing bang theory

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'sun-o',
                link:  '',
                text:  'To show tv related weather data',
                title: 'wetter.com',
                type:  'info'
            });
        }, 67 * 1000);

        // Malura postet was zum wetter

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'plane',
                link:  '',
                text:  'You want to travel to the city where your tv show was recorded?',
                title: 'weg.de',
                type:  'info'
            });
        }, 87 * 1000);

        // Malura postet was zu weg.com

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'twitter',
                link:  '',
                text:  'We add tweets related to the show.',
                title: 'twitter.com',
                type:  'info'
            });
        }, 107 * 1000);

        // Malura postet was zu twitter.com

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'exclamation',
                link:  '',
                text:  'Api responses were live results!',
                title: 'Real api',
                type:  'info'
            });
        }, 127 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'comments',
                link:  '',
                text:  'Users can create votes',
                title: 'Votes',
                type:  'info'
            });
        }, 133 * 1000);

        // Malura erstellt ein vote

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'exclamation',
                link:  '',
                text:  'Real time result calculation',
                title: 'All users can vote',
                type:  'info'
            });
        }, 153 * 1000);

        // Malura votet ein paar Mal

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  '',
                text:  'Get it on GitHub',
                title: 'Want the code?',
                type:  'info'
            });
        }, 170 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  'https://github.com/SocialbitGmbH/SmartTVGuideIOS',
                text:  '',
                title: 'SmartTVGuideIOS',
                type:  'info'
            });
        }, 171 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  'https://github.com/SocialbitGmbH/SmartTVGuideWeb',
                text:  '',
                title: 'SmartTVGuideWeb',
                type:  'info'
            });
        }, 172 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  'https://github.com/SocialbitGmbH/SmartTVGuideTVApp',
                text:  '',
                title: 'SmartTVGuideTVApp',
                type:  'info'
            });
        }, 173 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  'https://github.com/SocialbitGmbH/SmartTVGuideMiddleware',
                text:  '',
                title: 'SmartTVGuideMiddleware',
                type:  'info'
            });
        }, 174 * 1000);


        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'github-square',
                link:  'https://github.com/SocialbitGmbH/SmartTVGuideRNA',
                text:  '',
                title: 'SmartTVGuideRNA',
                type:  'info'
            });
        }, 175 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'beer',
                link:  '',
                text:  'Thank you!',
                title: 'Time is over',
                type:  'info'
            });
        }, 176 * 1000);

        $timeout(function()
        {
            $rootScope.$broadcast('socket:new_content', {
                date:  new Date(),
                icon:  'question',
                link:  '',
                text:  'Questions?',
                title: 'Anyone?',
                type:  'info'
            });
        }, 180 * 1000);
    });


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