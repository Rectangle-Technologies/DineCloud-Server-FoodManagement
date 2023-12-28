const { CreateFoodItem } = require("../controllers/food/create");
const { GetAllFoodItems, GetFoodItemById } = require("../controllers/food/get");

const routes = [
    {
        method: 'get',
        path: '/getAllFoodItems',
        controller: GetAllFoodItems,
        middlewares: [],
        inputSchema: {
            key: 'HealthCheckAPI',
            version: '1'
        },
        description: 'Get all food items'
    },
    {
        method: 'get',
        path: '/getFoodItem',
        controller: GetFoodItemById,
        middlewares: [],
        inputSchema: {
            key: 'HealthCheckAPI',
            version: '1'
        },
        description: 'Get single food item by id'
    },
    {
        method: 'post',
        path: '/createFoodItem',
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