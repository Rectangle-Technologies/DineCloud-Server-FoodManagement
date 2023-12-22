const { errorResponse } = require("../utils/response");
const { TokenNotProvidedException, TokenNotValidException } = require("../exceptions/Base");
const { UserNotFoundException } = require("../exceptions/User");
const jwt = require('@netra-development-solutions/utils.crypto.jsonwebtoken');

const authenticateUserMiddleware = async (req, res, next) => {
    try {
        const url = req.originalUrl.split('?')[0];

        // Bypass for login and create client
        if (url === '/api/user/login' || url === "/api/user/register" || url === '/api/client/create') {
            return next();
        }

        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new TokenNotProvidedException();
        }

        if (jwt.verify(token)) {
            // Decode token and check if user exists
            const decoded = jwt.decode(token);
            const user = await getModelDataById('User', decoded._id, token)

            if (!user) {
                throw new UserNotFoundException();
            }

            req.user = user;
            req.token = token;
        } else {
            throw new TokenNotValidException();
        }

        next();
    } catch (err) {
        errorResponse(res, err.message, err.statusCode)
    }
}

module.exports = authenticateUserMiddleware;