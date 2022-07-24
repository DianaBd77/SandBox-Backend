const UserReader = require("../../module/users/model/read");

class authMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(
        username,
        password
      );
    } catch (error) {
        res.status(500).send(error.message);
    }
  }
}

module.exports = authMiddleware;
