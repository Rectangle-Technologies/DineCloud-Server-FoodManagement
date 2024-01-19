const { AddFoodItem } = require("../controllers/menuSection/addFoodItem")
const { CreateMenuSection } = require("../controllers/menuSection/create")
const { DeleteMenuSection } = require("../controllers/menuSection/delete")
const { GetAllMenuSections, GetMenuSectionById, GetFoodItemsByMenuSectionId } = require("../controllers/menuSection/get")
const { UpdateMenuSection } = require("../controllers/menuSection/update")
const { validateBranchMiddleware } = require("../middlewares/validateBranch")

const routes = [
    {
        method: 'post',
        path: '/createMenuSection',
        controller: CreateMenuSection,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'CreateMenuSectionAPI',
            version: '1'
        },
        description: 'Create a menu section'
    },
    {
        method: 'post',
        path: '/getAllMenuSections',
        controller: GetAllMenuSections,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Get all menu sections'
    },
    {
        method: 'post',
        path: '/getMenuSectionById',
        controller: GetMenuSectionById,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Get single menu section by id'
    },
    {
        method: 'put',
        path: '/updateMenuSection',
        controller: UpdateMenuSection,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'CreateMenuSectionAPI',
            version: '1'
        },
        description: 'Update a menu section'
    },
    {
        method: 'delete',
        path: '/deleteMenuSection',
        controller: DeleteMenuSection,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Delete a menu section'
    },
    {
        method: 'post',
        path: '/addFoodItem',
        controller: AddFoodItem,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'AddFoodItemToMenuSectionAPI',
            version: '1'
        },
        description: 'Add food item to menu section'
    },
    {
        method: 'post',
        path: '/getFoodItemsByMenuSectionId',
        controller: GetFoodItemsByMenuSectionId,
        middlewares: [validateBranchMiddleware],
        inputSchema: {
            key: 'GetFoodItemAPI',
            version: '1'
        },
        description: 'Get food items by menu section id'
    }
]

module.exports = routes