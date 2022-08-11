const DatabaseManager = require("../../../core/database/databaseManager");

class PollRemover {
  static async deleteItemByID(uuid) {
    const query = `
    DELETE FROM items
    WHERE link = '${uuid}'`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollRemover;
