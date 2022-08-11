const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantRemover {
  static async deleteParticipantByPollID(id) {
    const query = `
    DELETE FROM participant
    WHERE poll_id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ParticipantRemover;
