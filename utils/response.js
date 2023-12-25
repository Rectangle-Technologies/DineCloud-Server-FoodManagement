// This file is to process data and send response to client in proper format.
const successResponse = (res, data, message) => {
    return res.status(200).json({
        status: 'success',
        message,
        data,
        error: null
    });
};

const errorResponse = (res, error, statuscode, data = {}) => {
    return res.status(statuscode).json({
        status: 'error',
        message: error.message || 'Internal server error',
        data: null,
        error
    });
};

module.exports = {
    successResponse,
    errorResponse
};