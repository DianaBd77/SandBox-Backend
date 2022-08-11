const DatabaseManager = require("../../../core/database/databaseManager");

class ChoiceRemover {
  static async deleteChoicePollID(id) {
    const query = `
    DELETE FROM choice
    WHERE poll_id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceRemover;
