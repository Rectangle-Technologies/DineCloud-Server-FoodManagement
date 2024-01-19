const { getModelDataByFilter, getModelDataById } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.GetAllMenuSections = async (req, res) => {
    try {
        const response = await getModelDataByFilter('MenuSection', {}, req.headers.authorization)

        return successResponse(res, response.data.data, 'Menu sections fetched successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}

exports.GetMenuSectionById = async (req, res) => {
    try {
        const id = req.query.id
        if (!id) {
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "Validation error",
                    message: "Id is required",
                    statusCode: 403
                }
            }, 403)
        }

        const response = await getModelDataById('MenuSection', id, req.headers.authorization)

        if (!response.data.data[0].MenuSection.length) {
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "ModelDataNotFoundException",
                    message: "Menu section not found",
                    statusCode: 404
                }
            }, 404)
        }

        return successResponse(res, response.data.data, 'Menu section fetched successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}

exports.GetFoodItemsByMenuSectionId = async (req, res) => {
    try {
        const id = req.query.id
        if (!id) {
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "Validation error",
                    message: "Id is required",
                    statusCode: 403
                }
            }, 403)
        }

        const menuSectionResponse = await getModelDataById('MenuSection', id, req.headers.authorization)

        if (!menuSectionResponse.data.data[0].MenuSection.length) {
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "ModelDataNotFoundException",
                    message: "Menu section not found",
                    statusCode: 404
                }
            }, 404)
        }

        const foodItemsResponse = await getModelDataByFilter('FoodItem', { menuSectionId: id }, req.headers.authorization)

        return successResponse(res, foodItemsResponse.data.data, 'Food items fetched successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}