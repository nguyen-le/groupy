"use strict";
var routes_1 = require('./static-route/routes');
var user_1 = require('./user');
var routes = [].concat(routes_1.staticRoutes, user_1.userRoutes);
exports.routes = routes;
