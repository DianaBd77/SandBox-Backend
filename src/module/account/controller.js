const UserCreator = require("./model/create");
const DatabaseManager = require("../../core/database/databaseManager");

class UserController {
  static async createNewUser(req, res, next) {
    try {
      const userData = req.body;
      const { email } = userData;
      const query = `SELECT * FROM user WHERE email = '${email}'`;
      const findEmail = await DatabaseManager.query(query);
      console.log('findEmail :>> ', findEmail[0]);
      if (findEmail[0][0]) {
        res.status(409).end("Email Already Exist!");
      } else {
        const result = await UserCreator.createUser(userData);
        res.send(result);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
