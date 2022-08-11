const DatabaseManager = require("../../../core/database/databaseManager");


class ParticipantReader {
  static async getAllParticipant(id) {
    const query = `
      SELECT name
      FROM participant
      WHERE poll_id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

}

module.exports = ParticipantReader;
