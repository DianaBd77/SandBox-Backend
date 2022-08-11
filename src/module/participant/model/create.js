const DatabaseManager = require("../../../core/database/databaseManager");

class ParticipantCreator {

  static async  createParticipant(participantData) {
    const { poll_id, name } = participantData;
    const query = `
      INSERT INTO participant
      (poll_id, name)
      VALUES
      (${poll_id}, '${name}');
      `;
    const result = await DatabaseManager.query(query);
    return result;
  }

}

module.exports = ParticipantCreator;
