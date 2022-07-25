const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth");

class authMiddleware {
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
          id: user.id,
          username: user.username,
        };

        const jwt = AuthenticationManager.getJwtToken(payload);
        res
          .cookie("token", jwt.token, {
            httpOnly: true,
            maxAge: jwt.expirySecond * 1000,
          })
          .end();
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static jwtTokenValidation(req, res, next) {
    try {
      const jwtToken = req.cookie.token;
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
}

module.exports = authMiddleware;
