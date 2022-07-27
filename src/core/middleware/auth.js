const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth");

class AuthMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(
        username,
        password
      );
      if (!user) {
        res.status(401).end();
      } else {
        const payload = {
          id: user[0].id,
          username: user[0].username,
        };
        
        const jwt = AuthenticationManager.getJwtToken(payload);
        res.send(jwt);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = AuthMiddleware.parseAuthorizationToken(req.headers.authorization);
      if (!jwtToken) {
        throw new Error("Token not Exists!");
      }
      const payload = AuthenticationManager.getJwtTokenPayload(jwtToken);
      console.log(payload)
      console.log(payload)
      req.jwt_payload = payload;
      next();
    } catch (error) {
      console.log('err :>> ', err);
      res.status(401).end();
    }
  }

  static parseAuthorizationToken(authorization){
    if(!authorization){
      throw new Error('Authorization Token not Found!')
    }
    const bearer = authorization.split(' ');
    return bearer;
  }

}

module.exports = AuthMiddleware;
