app.factory('DeviceManager', function (
      $cookieStore
    , $log
    , $rootScope
)
{
    var DeviceManager =
    {
        id: null
    };

    DeviceManager.getId = function (clean)
    {
        return DeviceManager.id;
    };

    DeviceManager.hasId = function ()
    {
        return DeviceManager.id && DeviceManager.id.length > 0;
    };

    DeviceManager.init = function ()
    {
        $log.log('DeviceManager: initializing');

        try
        {
            var idFromCookie = $cookieStore.get('deviceId');

            if (idFromCookie)
            {
                $log.log('DeviceManager: got if from cookie');

                DeviceManager.id = idFromCookie;
            }
        }
        catch (exception)
        {
            $log.error(exception);
        }

        if (DeviceManager.id === null)
        {
            DeviceManager.id = guid();

            $cookieStore.put('deviceId', DeviceManager.id);
        }

        $log.log('DeviceManager: initialized');
    };

    DeviceManager.init();

    return DeviceManager;
});