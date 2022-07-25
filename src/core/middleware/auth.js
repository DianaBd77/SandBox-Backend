const UserReader = require("../../module/users/model/read");
const AuthenticationManager = require("../auth");

class authMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(username, password);
      if (!user) {
        res.status(401).end();
      } else {
        const payload = {
          id: user.id,
          username: user.username,
        };

        const jwtToken = AuthenticationManager.getJwtToken(payload);
        res.send(jwtToken);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = authMiddleware;
