const UserReader = require("./model/read");

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await UserReader.getAllUsers();
      res.send(users);
    } catch(error) {
      next(error);
    }
  }

  static async getUserByID(req, res, next) {
    try {
      const { id } = req.params;
      if(id != req.jwt_payload.id){
        throw new Error("You can not get other user data");
      }

      const user = await UserReader.getUserByID(id);
      res.send(user);
    } catch(error) {
      next(error);
    }
  }

}

module.exports = UserController;
