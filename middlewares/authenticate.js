const { errorResponse } = require("../utils/response");
const { TokenNotProvidedException, TokenNotValidException } = require("../exceptions/Base");
const { UserNotFoundException } = require("../exceptions/User");
const jwt = require('@netra-development-solutions/utils.crypto.jsonwebtoken');
const { getModelDataById } = require("../utils/internalServerComms");

const authenticateUserMiddleware = async (req, res, next) => {
    try {
        // get whole url from request
        const url = req.originalUrl.split('?')[0];

        // by pass authentication for login/register routes
        if (url === "/api/user/login" || url === "/api/client/create" || url === "/api/user/register") {
            return next();
        }

        // Extract token
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new TokenNotProvidedException();
        }

        // Verify token
        if (jwt.verify(token)) {
            const decoded = jwt.decode(token);

            // Check for user
            const response = await getModelDataById('User', decoded._id, token);
            const user = response.data.data;

            if (!user.length) {
                throw new UserNotFoundException();
            }

            req.user = user[0].User[0];
            req.token = token;

        } else {
            throw new TokenNotValidException();
        }
        next();
    } catch (error) {
        // responding with unauthorized error
        const errorObject = error?.response?.data || error;
        errorResponse(res, errorObject, error?.response?.status || 500);
    }
}

module.exports = authenticateUserMiddleware;