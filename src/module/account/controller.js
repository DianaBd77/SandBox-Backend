const UserCreator = require("./model/create");
const DatabaseManager = require("../../core/database/databaseManager");
const AuthenticationManager = require("../../core/auth");

class UserController {
  static async createNewUser(req, res, next) {
    try {
      const userData = req.body;
      const { email, username } = userData;
      const query = `SELECT * FROM user WHERE email = '${email}'`;
      const findEmail = await DatabaseManager.query(query);
      if (findEmail[0][0]) {
        res.status(409).end("Email Already Exist!");
      } else {
        const result = await UserCreator.createUser(userData);
        const payload = {
          id: email,
          username: username,
        };

        const jwt = await AuthenticationManager.getJwtToken(payload);
        res.json(jwt);
        // res.send(result);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
