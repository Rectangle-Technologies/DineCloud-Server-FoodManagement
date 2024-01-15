const { getModelDataById, getModelDataByFilter } = require('../utils/internalServerComms');
const { errorResponse } = require('../utils/response');

exports.validateBranchMiddleware = async (req, res, next) => {
    try {
        // Fetch branch from database
        const branchResponse = await getModelDataByFilter('Branch', {
            _id: req.body.branchId,
            code: req.body.branchCode
        }, req.headers.authorization);

        // Check if branch exists
        if (!branchResponse?.data?.data[0]?.Branch?.length) {
            return errorResponse(res, { error: 'Not found', message: 'This branch does not exist or does not belong to this client' }, 404);
        }
        next();
    } catch (error) {
        const errorObject = error?.response?.data || error;
        errorResponse(res, errorObject, error?.response?.status || 500)
    }
}