let socket = io();

socket.on('connect', function () {
    console.log('real App');
});

$(document).ready(function () {
    let locationButton = $('#myButton');
    locationButton.on('click', function () {
        socket.emit('changeColor', '#myButton', locationButton.attr('class'));
    });
});
socket.on('newLocationMessage', (button, buttonClass) => {
    button = $(button);
    button.removeAttr('class');
    button.addClass(buttonClass);
});