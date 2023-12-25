const { errorResponse, successResponse } = require("../../utils/response")
const { saveDataByModel } = require("../../utils/internalServerComms")

exports.CreateFoodItem = async (req, res) => {
    try {
        const response = await saveDataByModel('FoodItems', req.body, req.headers.authorization);

        return successResponse(res, response.data, 'Food item created successfully')
    } catch (err) {
        errorResponse(res, err.response.data, err.statusCode || 500)
    }
}