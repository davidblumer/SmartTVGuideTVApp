$(document).ready(function()
{
    $('#events').on('click', 'li', function()
    {
        var li = $(this);
        var a   = $(this).find('a');

        window.open(a.attr('href'), '_blank').focus();
    });
});