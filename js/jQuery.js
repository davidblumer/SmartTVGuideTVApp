$(document).ready(function()
{
    $('#events').on('click', 'li', function()
    {
        var li    = $(this);
        var a      = $(this).find('a');
        var target = a.attr('href');

        if (target && target.length > 0)
        {
            window.open(target, '_blank').focus();
        }
    });
});