const DatabaseManager = require("../../../core/database/databaseManager");

class UserReader {
  static async getAllUsers() {
    const query = `SELECT * FROM user`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getUserByID(id) {
    const query = `SELECT * FROM user WHERE id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getUserByUsername(username){
    const query = `
    SELECT *
    FROM user
    WHERE username = '${username}'
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getUserByUsernameAndPassword(username, password) {
    const query = `
    SELECT *
    FROM user
    WHERE username = '${username}' AND password = '${password}'
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = UserReader;
