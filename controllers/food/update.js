const { saveDataByModel } = require("../../utils/internalServerComms");
const { successResponse, errorResponse } = require("../../utils/response");

exports.UpdateFoodItem = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) return errorResponse(res, { error: 'id is required' }, 400)

        const response = await saveDataByModel('FoodItem', { _id: id, ...req.body }, req.headers.authorization);

        return successResponse(res, response.data.data, 'Food item updated successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        if (errorObject.message === 'Model data not found') {
            errorObject.message = 'Food item not found'
            errorObject.error.message = 'Food item not found'
        }
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}