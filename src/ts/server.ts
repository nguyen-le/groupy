import {Server} from 'hapi'

const server = new Server()
server.connection({
    host: 'localhost',
    port: 8000
})

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (req, reply) {
        return reply('hello world')
    }
})

server.start((err) => {
    if (err) { throw err }

    console.log('Server running at: ', server.info.uri);
})
