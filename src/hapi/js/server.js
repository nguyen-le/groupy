"use strict";
var hapi_1 = require('hapi');
var Inert = require('inert');
var Path = require('path');
var route_1 = require('./route');
//Groupy.createSync(__dirname + '/routes/', 'routes')
var server = new hapi_1.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../public')
            }
        }
    }
});
server.connection({
    host: '0.0.0.0',
    port: 8000
});
server.register(Inert, function (err) {
    if (err) {
        throw err;
    }
});
server.route(route_1.routes);
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at: ', server.info.uri);
});
