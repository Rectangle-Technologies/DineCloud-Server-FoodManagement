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

        // Verify token
        if (jwt.verify(token)) {
            const decoded = jwt.decode(token);
            // Check for user
            var response = await getModelDataById('User', decoded._id, token);
            const users = response.data.data[0].User;
            if (users.length) {
                req.user = { ...users[0], role: 1 };
                req.token = token;
                return next();
            }

            // Check if the user is a developer
            response = await getModelDataById('Developer', decoded._id, token)
            const developers = response.data.data[0].Developer;
            if (!developers.length) {
                throw new UserNotFoundException();
            }

            req.user = { ...developers[0], role: 0 };
            req.token = token;
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