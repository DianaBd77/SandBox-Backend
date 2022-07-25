const UserReader = require("./model/read");
// const UserCreator = require("./model/create");
// const UserUpdater = require("./model/update");
// const UserRemover = require("./model/delete");

class UserController {
  static async getAllUsers(req, res, next) {
    try {
      const users = await UserReader.getAllUsers();
      res.send(users);
    } catch {
      next(err);
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
    } catch {
      next(err);
    }
  }

//   static async createNewUser(req, res, next) {
//     try {
//       const userData = req.body;
//       const result = await UserCreator.createUser(userData);
//       res.send(result);
//     } catch (error) {
//       next(err);
//     }
//   }

}

module.exports = UserController;
