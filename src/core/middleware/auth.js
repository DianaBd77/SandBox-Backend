const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth");
const bcrypt = require("bcrypt");

class AuthMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const users = await UserReader.getUserByUsername(username);
      if(!users[0]){
        res.status(404).end("User not Exist!")
      } else{
        const dbPass = users[0].password;
        const comparePass = await bcrypt.compare(password, dbPass);
        if (comparePass) {
          const payload = {
            id: users[0].id,
            username: users[0].email,
          };
  
          const jwt = AuthenticationManager.getJwtToken(payload);
          res.json(jwt);
        } else {
          res.status(403).end("Wrong Password!");
        }
      }

    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = AuthMiddleware.parseAuthorizationToken(
        req.headers.authorization
      );
      if (!jwtToken) {
        throw new Error("Token not Exists!");
      }
      const payload = AuthenticationManager.getJwtTokenPayload(jwtToken);
      req.jwt_payload = payload;
      next();
    } catch (error) {
      res.status(401).end();
    }
  }

  static parseAuthorizationToken(authorization) {
    if (!authorization) {
      throw new Error("Authorization Token not Found!");
    }
    const bearer = authorization.split(" ");
    return bearer[1];
  }
}

module.exports = AuthMiddleware;
