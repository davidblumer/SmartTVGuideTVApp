app.factory('DeviceManager', function (
      $log
    , $rootScope
)
{
    var DeviceManager =
    {
        id: guid()
    };

    DeviceManager.getId = function (clean)
    {
        return DeviceManager.id;
    };

    DeviceManager.hasId = function ()
    {
        return DeviceManager.id && DeviceManager.id.length > 0;
    };

    return DeviceManager;
});