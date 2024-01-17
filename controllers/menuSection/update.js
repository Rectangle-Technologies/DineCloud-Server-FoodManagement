const { saveDataByModel } = require("../../utils/internalServerComms");
const { errorResponse, successResponse } = require("../../utils/response");

exports.UpdateMenuSection = async (req, res) => {
    try {
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

        const response = await saveDataByModel('MenuSection', { _id: id, ...req.body }, req.headers.authorization);
        return successResponse(res, response.data.data, 'Menu section updated successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error;
        if (errorObject.error.message === 'Model data not found') {
            errorObject.error.message = 'Menu section not found'
        }
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}