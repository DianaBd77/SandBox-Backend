const DatabaseManager = require("../../../core/database/databaseManager");
const bcrypt = require("bcrypt");

class UserCreator {
  static async createUser(userData) {
    const { username, password, first_name, last_name } = userData;
    // const hashedPassword = await bcrypt.hash(password, saltRounds);
    const query = `
      INSERT INTO user
      (username, password, first_name, last_name)
      VALUES
      ('${username}', '${password}', '${first_name}', '${last_name}')`;

    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = UserCreator;
