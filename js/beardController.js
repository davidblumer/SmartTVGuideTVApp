var beard = null;

$(document).ready(function()
{
    beard = $('#beard');
});

/* global app */
angular.module('smartGuide').controller('BeardController', function (
      $log
    , $rootScope
    , $scope
    , DeviceManager
    , StreamSocket
)
{
    $scope.beard = {
        enabled: false,
        imageIndex: 1
    };

    $scope.$on('socket:beard_show', function (event, data) {
        $log.log('BeardController: beard_show', event, data);

        $scope.beardEnable();
    });

    $scope.$on('socket:beard_hide', function (event, data) {
        $log.log('BeardController: beard_show', event, data);

        $scope.beardDisable();
    });

    $scope.$on('socket:beard_set_zoom', function (event, data) {
        $log.log('BeardController: beard_set_zoom', event, data);

        beard.css('zoom', data.z);
    });

    $scope.$on('socket:beard_set_rotation', function (event, data) {
        // $log.log('BeardController: beard_set_rotation', event, data, 'rotate('® + data.r + 'deg)');

        beard.css('transform', 'rotate(' + data.r + 'deg)');
    });

    $scope.$on('socket:beard_set_position', function (event, data) {
        $log.log('BeardController: beard_set_position', event, data);

        beard.css('left', data.x + '%').css('top', data.y + '%');
    });


    $scope.$on('socket:beard_set_index', function (event, data) {
        $log.log('BeardController: beard_set_index', event, data);

        $scope.beard.imageIndex = data.i;
    });


    $scope.$on('socket:beard_update', function (event, data) {
        // $log.log('BeardController: beard_update', event, data);

        $scope.beard.imageIndex = data.i;

        if (data.x < 0)   data.x = 10;
        if (data.y < 0)   data.y = 10;
        if (data.z < 0.2) data.z = 0.2;

        beard.css({
            left:       data.x + 'px',
            top:        data.y + 'px',
            transform: 'rotate(' + data.r + 'deg)',
            zoom:       data.z
        });
    });




    $scope.beardDisable = function()
    {
        $scope.beard.enabled = false;
    };

    $scope.beardEnable = function()
    {
        $scope.beard.enabled = true;
    };
});