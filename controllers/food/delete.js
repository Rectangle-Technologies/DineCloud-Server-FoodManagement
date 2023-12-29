const { deleteModelDataById } = require("../../utils/internalServerComms");
const { errorResponse, successResponse } = require("../../utils/response");

exports.DeleteFoodItem = async (req, res) => {
    try {
        const id = req.query.id;
        if (!id) return errorResponse(res, { error: 'Validation error', message: 'id is required' }, 400)

        const response = await deleteModelDataById('FoodItem', id, req.headers.authorization);

        if (response.data.data[0].FoodItem.deletedCount === 0)
            return errorResponse(res, { error: 'Food item not found', message: 'Food item not found' }, 404)

        return successResponse(res, response.data.data, 'Food item deleted successfully')
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}