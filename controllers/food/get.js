const { getModelDataByFilter, getModelDataById } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.GetAllFoodItems = async (req, res) => {
    try {
        const response = await getModelDataByFilter('FoodItem', {}, req.headers.authorization);

        successResponse(res, response.data, 'Food items fetched successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}

exports.GetFoodItemById = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) return errorResponse(res, { error: 'id is required', message: 'Validation error' }, 404)

        const response = await getModelDataById('FoodItem', id, req.headers.authorization);

        successResponse(res, response.data, 'Food item fetched successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}