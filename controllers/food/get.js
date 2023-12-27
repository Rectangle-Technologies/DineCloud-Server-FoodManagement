const { getModelDataByFilter } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.GetAllItems = async (req, res) => {
    try {
        const response = await getModelDataByFilter('FoodItems', {}, req.headers.authorization);

        successResponse(res, response.data, 'Food items fetched successfully')
    } catch (err) {
        errorResponse(res, err?.response?.data, err.statusCode || 500)
    }
}