const UserCreator = require("./model/create");
const DatabaseManager = require("../../core/database/databaseManager");
const AuthenticationManager = require("../../core/auth");

class UserController {
  static async createNewUser(req, res, next) {
    try {
      const userData = req.body;
      const { email, username } = userData;
      const usernameQuery = `SELECT * FROM user WHERE username = '${username}'`;
      const findUsername = await DatabaseManager.query(usernameQuery);
      const emailQuery = `SELECT * FROM user WHERE email = '${email}'`;
      const findEmail = await DatabaseManager.query(emailQuery);
      if (findUsername[0][0]) {
        res.status(409).end("Username Already Exist!");
        return;
      } else if (findEmail[0][0]) {
        res.status(409).end("Email Already Exist!");
        return;
      }

      const newUser = await UserCreator.createUser(userData);
      const newUserID = newUser[0].insertId;
   
      const payload = {
        id: newUserID,
        username: username,
      };
      
      const jwt = await AuthenticationManager.getJwtToken(payload);
      res.json(jwt);
      // res.send(result);

    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
