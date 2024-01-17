const { deleteModelDataById } = require("../../utils/internalServerComms");
const { errorResponse, successResponse } = require("../../utils/response");

exports.DeleteMenuSection = async (req, res) => {
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

        const response = await deleteModelDataById('MenuSection', id, req.headers.authorization);

        if (response.data.data[0].MenuSection.deletedCount === 0)
            return errorResponse(res, {
                status: "error",
                data: null,
                error: {
                    name: "ModelDataNotFoundException",
                    message: "Menu section not found",
                    statusCode: 404
                }
            }, 404)

        return successResponse(res, response.data.data, 'Menu section deleted successfully')
    } catch (error) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err?.response?.status || 500)
    }
}