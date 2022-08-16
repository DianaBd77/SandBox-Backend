const DatabaseManager = require("../../../core/database/databaseManager");

class PollRemover {
  static async deletePollByID(uuid) {
    const query = `
    DELETE FROM poll
    WHERE link = '${uuid}'`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollRemover;
