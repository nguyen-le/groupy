import {Server} from 'hapi'
import * as Inert from 'inert'

const server = new Server()
server.connection({
    host: '0.0.0.0',
    port: 8001
})

server.register(Inert, (err) => {
    if (err) { throw err }
})

server.route([
    {
        method: 'GET',
        path: '/hello',
        handler: function (req, reply) {
            return reply('hello')
        }
    },
    {
        method: 'GET',
        path: '/hello_world',
        handler: function (req, reply) {
            return reply('hello world2')
        }
    },
    {
        method: 'GET',
        path: '/template',
        handler: { file: './index.html' }
    }
])

server.start((err) => {
    if (err) { throw err }

    console.log('Server running at: ', server.info.uri);
})
