const UserReader = require("../../module/users/model/read");

class authMiddleware {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await UserReader.getUserByUsernameAndPassword(
        username,
        password
      );
      const payload = {
        id: user.id,
        username: user.username,
      };
      res.send(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = authMiddleware;
