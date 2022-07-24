const DatabaseManager = require("../../../core/database/databaseManager");

class UserReader {
  static async getUserByUsernameAndPassword(username, password) {
    const query = `
    select *
    from user
    where username = '${username}' And password = '${password}'
    `
    const result = await DatabaseManager.query(query);
    return result[0];
  }

}

module.exports = UserReader;
