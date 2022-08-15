const UserReader = require("./model/read");

class UserController {
  // static async getAllUsers(req, res, next) {
  //   try {
  //     const users = await UserReader.getAllUsers();
  //     res.json(users);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  static async getUserByID(req, res, next) {
    try {
      const {id} = req.jwt_payload;
      const username = await UserReader.getUserByID(id)
      res.json(username);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
