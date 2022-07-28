const UserCreator = require("./model/create");

class UserController {
  static async createNewUser(req, res, next) {
    try {
      const userData = req.body;
      const { email } = userData;
      const findEmail = `SELECT email FROM user WHERE email = ${email}`;
      if (findEmail) {
        res.status(409).end("Email Already Exist!");
      } else {
        const result = await UserCreator.createUser(userData);
        console.log(result);
        res.send(result);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
