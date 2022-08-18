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

  static async getChoiceByPollID(pollID) {
    const query = `
    SELECT p.name, i.item
    FROM choice c
        INNER JOIN participant p on c.participant_id = p.id
        INNER JOIN items i on c.item_id = i.id
    WHERE c.poll_id = ${pollID};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = ChoiceReader;
