const jwt = require('jsonwebtoken');
const {jwt: jwt_config} = require("../../config")

class AuthenticationManager{
    static getJwtToken(payload){
        const token = jwt.sign(payload, jwt_config.secret)
    }
}