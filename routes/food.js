const { CreateFoodItem } = require("../controllers/food/create");
const { DeleteFoodItem } = require("../controllers/food/delete");
const { GetAllFoodItems, GetFoodItemById } = require("../controllers/food/get");
const { UpdateFoodItem } = require("../controllers/food/update");
const { validateBranchMiddleware } = require("../middlewares/validateBranch");

const routes = [
    {
        method: 'post',
        path: '/getAllFoodItems',
        controller: GetAllFoodItems,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Get all food items'
    },
    {
        method: 'post',
        path: '/getFoodItem',
        controller: GetFoodItemById,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Get single food item by id'
    },
    {
        method: 'post',
        path: '/createFoodItem',
        controller: CreateFoodItem,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'CreateFoodItemAPI',
            version: '1'
        },
        description: 'Create a food item'
    },
    {
        method: 'put',
        path: '/updateFoodItem',
        controller: UpdateFoodItem,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'CreateFoodItemAPI',
            version: '1'
        },
        description: 'Update a food item'
    },
    {
        method: 'delete',
        path: '/deleteFoodItem',
        controller: DeleteFoodItem,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'HealthCheckAPI',
            version: '1'
        },
        description: 'Delete a food item'
    }
]

module.exports = routes;