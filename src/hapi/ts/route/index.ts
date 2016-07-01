import {staticRoutes} from './static-route/routes'
import {userRoutes} from './user'

let routes = [].concat(staticRoutes, userRoutes)

export {routes}
