const { default: mongoose } = require("mongoose");
const { saveDataByModel, getModelDataById } = require("../../utils/internalServerComms");
const { successResponse, errorResponse } = require("../../utils/response");

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
        const menuSectionResponse = await getModelDataById('MenuSection', id, req.headers.authorization);
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
        const foodItemResponse = await getModelDataById('FoodItem', req.body.foodItemId, req.headers.authorization);
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