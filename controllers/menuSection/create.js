const { saveDataByModel } = require("../../utils/internalServerComms")
const { errorResponse, successResponse } = require("../../utils/response")

exports.CreateMenuSection = async (req, res) => {
    try {
        const response = await saveDataByModel('MenuSection', req.body, req.headers.authorization)

        return successResponse(res, response.data, 'Menu section created successfully')
    } catch (error) {
        const errorObject = error?.response?.data || error
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}