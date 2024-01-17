const routers = [
    {
        path: '/food',
        router: require('./routes/food')
    },
    {
        path: '/menuSection',
        router: require('./routes/menuSection')
    }
]

module.exports = routers;