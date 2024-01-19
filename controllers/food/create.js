const { errorResponse, successResponse } = require("../../utils/response")
const { saveDataByModel } = require("../../utils/internalServerComms")

exports.CreateFoodItem = async (req, res) => {
    try {
        const response = await saveDataByModel('FoodItem', req.body, req.headers.authorization);

        return successResponse(res, response.data.data, 'Food item created successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}