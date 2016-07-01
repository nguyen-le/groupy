let staticRoutes = [
    {
        method: 'GET',
        path: '/',
        handler: { file: 'index.html' }
    },
    {
        method: 'GET',
        path: '/public/landing/app.js',
        handler: { file: 'landing-app.js' }
    }
]

export {staticRoutes}
