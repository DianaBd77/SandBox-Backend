const DatabaseManager = require("../../../core/database/databaseManager");


class ChoiceReader {
  static async getChoiceByID(id) {
    const query = `
      SELECT item_id
      FROM choice
      WHERE participant_id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

}

module.exports = ChoiceReader;
