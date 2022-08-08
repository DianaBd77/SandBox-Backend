const UserReader = require("./model/read");

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await UserReader.getAllUsers();
      res.json(users);
    } catch (error) {
      next(error);
    }
  }

  static async getUserByID(req, res, next) {
    try {
      const { id } = req.params;
      if (id != req.jwt_payload.id) {
        res.status(403).end("Access Denied");
      }

      const user = await UserReader.getUserByID(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
