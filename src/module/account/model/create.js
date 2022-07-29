const DatabaseManager = require("../../../core/database/databaseManager");
const bcrypt = require("bcrypt");

class UserCreator {
  static async createUser(userData) {
    const { username, password, first_name, last_name, email } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO user
      (username, password, first_name, last_name, email)
      VALUES
      ('${username}', '${hashedPassword}', '${first_name}', '${last_name}', '${email}')`;

    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = UserCreator;
