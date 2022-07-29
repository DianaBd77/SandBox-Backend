const jwt = require('jsonwebtoken');
const {jwt: jwt_config} = require("../../config");

class AuthenticationManager{
    static getJwtToken(payload){
        const expirySecond = Number(jwt_config.expirySecond);
        const token = jwt.sign(payload, jwt_config.secret, {
            algorithm: 'HS256',
            expiresIn: expirySecond
        });
        return{
            token,
            expirySecond
        }
    }
    static getJwtTokenPayload(token){
        return jwt.verify(token, jwt_config.secret);
    }
}

module.exports = AuthenticationManager;