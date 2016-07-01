export let userRoute = [
    {
        method: 'GET',
        path: '/api/v1/user',
        handler: function(req, reply) {
            return reply('user get')
        }
    },
    {
        method: 'POST',
        path: '/api/v1/user',
        handler: function(req, reply) {
            return reply('user post')
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/user',
        handler: function(req, reply) {
            return reply('user put')
        }
    }
]
