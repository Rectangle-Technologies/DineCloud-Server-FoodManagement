const { GetAllItems } = require("../controllers/food/get");

const routes = [
    {
        method: 'get',
        path: '/getAllItems',
        controller: GetAllItems,
        middlewares: [],
        description: 'Get all food items'
    }
]

module.exports = routes;