var socket = io();

socket.on('connect', function() {
    console.log("Conectado al servidor");
})

socket.on('disconnect', function() {
    console.log("desconectado del servidor");
})

socket.on('msgdesdeserver', function(data) {
    console.log(data);
})

socket.emit('enviarMensaje', {
    user: 'Erik',
    msg: 'Hello world!'
}, function(resp) {
    console.log('respuesta server: ', resp);
});