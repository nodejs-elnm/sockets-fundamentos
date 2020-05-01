const { io } = require('../server')

io.on('connection', (client) => {
    console.log('user connected!');

    client.emit('msgdesdeserver', {
        user: 'server',
        msg: 'Bienvenido'
    })

    client.on('disconnect', () => {
        console.log('Cliente Desconetado');
    });

    client.on('enviarMensaje', (msg, callback) => {
        console.log(msg);


        client.broadcast.emit('msgdesdeserver', msg)

        // if (msg.user) {
        //     callback({
        //         resp: 'Todo salio bienn'
        //     })
        // } else {
        //     callback({
        //         resp: 'Hubo un error!!!!'
        //     })
        // }

    })


});