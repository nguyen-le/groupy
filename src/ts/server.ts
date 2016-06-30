import {Server} from 'hapi'
import * as Inert from 'inert'
import * as Path from 'path'
import * as Groupy from 'require-namespace'

import {staticRoutes} from './routes'
//Groupy.createSync(__dirname + '/routes/', 'routes')

const server = new Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../public')
            }
        }
    }
})

server.connection({
    host: '0.0.0.0',
    port: 8000
})

server.register(Inert, (err) => {
    if (err) { throw err }
})

server.route(staticRoutes)

server.start((err) => {
    if (err) { throw err }

    console.log('Server running at: ', server.info.uri);
})
