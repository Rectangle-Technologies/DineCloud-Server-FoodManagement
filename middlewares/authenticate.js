const { errorResponse } = require("../utils/response");
const { TokenNotProvidedException, TokenNotValidException } = require("../exceptions/Base");
const { UserNotFoundException } = require("../exceptions/User");
const jwt = require('@netra-development-solutions/utils.crypto.jsonwebtoken');
const { getModelDataById } = require("../utils/internalServerComms");

const authenticateUserMiddleware = async (req, res, next) => {
    try {
        // Extract token
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new TokenNotProvidedException();
        }

        if (jwt.verify(token)) {
            // Decode token and check if user exists
            const decoded = jwt.decode(token);
            var response = await getModelDataById('User', decoded._id, token)
            var user = response.data.data

            // Check if the user is a developer
            if (!user) {
                response = await getModelDataById('Developer', decoded._id, token)
                user = response.data.data
            }

            if (!user) {
                throw new UserNotFoundException();
            }

            req.user = user;
            req.token = token;
            req.user.clientCode = process.env.BASE_CLIENT_CODE
        } else {
            throw new TokenNotValidException();
        }

        next();
    } catch (err) {
        const errorObject = err?.response?.data || err;
        errorResponse(res, errorObject, err.status || 500)
    }
}

module.exports = authenticateUserMiddleware;