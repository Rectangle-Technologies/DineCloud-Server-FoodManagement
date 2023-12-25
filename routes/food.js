const { CreateFoodItem } = require("../controllers/food/create");
const { GetAllItems } = require("../controllers/food/get");

const routes = [
    // {
    //     method: 'get',
    //     path: '/getAllItems',
    //     controller: GetAllItems,
    //     middlewares: [],
    //     description: 'Get all food items'
    // },
    {
        method: 'post',
        path: '/create',
        controller: CreateFoodItem,
        middlewares: [],
        inputSchema: {
            key: 'CreateFoodItemAPI',
            version: '1'
        },
        description: 'Create a food item'
    }
]

module.exports = routes;