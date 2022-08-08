const DatabaseManager = require("../../../core/database/databaseManager");

class PollRemover {
  static async deletePollByID(id) {
    const query = `
    DELETE FROM poll
    WHERE id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollRemover;
