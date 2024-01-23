const { getModelDataByFilter } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.GetAllFoodItems = async (req, res) => {
    try {
        const response = await getModelDataByFilter('FoodItem', {}, req.headers.authorization);

        successResponse(res, response.data.data, 'Food items fetched successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}

exports.GetFoodItemById = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) return errorResponse(res, { error: 'id is required', message: 'Validation error' }, 403)

        const response = await getModelDataByFilter('FoodItem', { _id: id, ...req.body }, req.headers.authorization);

        if (!response.data.data[0].FoodItem.length) {
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

        successResponse(res, response.data.data, 'Food item fetched successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}