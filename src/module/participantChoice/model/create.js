const DatabaseManager = require("../../../core/database/databaseManager");

class ChoiceCreator {
  static async createChoice(choice) {
    const {poll_id, participant_id, item_id } = choice;
    const query = `
      INSERT INTO choice
      (poll_id, participant_id, item_id)
      VALUES
      (${poll_id}, ${participant_id}, ${item_id});
      `;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ChoiceCreator;
