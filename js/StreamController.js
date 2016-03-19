/* global app */
angular.module('smartGuide').controller('StreamController', function (
      $log
    , $rootScope
    , $scope
    , StreamSocket
)
{


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





});