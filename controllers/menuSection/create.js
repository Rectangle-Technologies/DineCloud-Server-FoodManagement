const { saveDataByModel, getModelDataByFilter } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.CreateMenuSection = async (req, res) => {
    try {
        const response = await saveDataByModel('MenuSection', req.body, req.headers.authorization)

        return successResponse(res, response.data.data, 'Menu section created successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}

exports.AddFoodItem = async (req, res) => {
    try {
        // Validate for id
        const id = req.query.id;
        if (!id) return errorResponse(res, {
            status: "error",
            data: null,
            error: {
                name: "Validation error",
                message: "Id is required",
                statusCode: 403
            }
        }, 403)

        // Check if menu section exists
        const menuSectionResponse = await getModelDataByFilter('MenuSection',
            { _id: id, branchId: req.body.branchId, branchCode: req.body.branchCode },
            req.headers.authorization);
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

        // Get food item
        const foodItemResponse = await getModelDataByFilter('FoodItem',
            { _id: req.body.foodItemId, branchId: req.body.branchId, branchCode: req.body.branchCode },
            req.headers.authorization);
        if (!foodItemResponse.data.data[0].FoodItem.length) {
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "ModelDataNotFoundException",
                    message: "Food item not found",
                    statusCode: 404
                }
            }, 404)
        }
        const foodItem = foodItemResponse.data.data[0].FoodItem[0];
        foodItem.menuSectionId = id;

        // Save food item
        const saveFoodItemResponse = await saveDataByModel('FoodItem', foodItem, req.headers.authorization);

        return successResponse(res, saveFoodItemResponse.data.data, 'Menu section updated successfully')
    } catch (error) {
        console.log('error', error)
        const errorObject = error?.response?.data || error;
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}