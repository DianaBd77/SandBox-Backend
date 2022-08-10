const DatabaseManager = require("../../../core/database/databaseManager");


class PollReader {
  static async getAllPolls(userID) {
    const query = `
      SELECT title, description, link, img_url
      FROM poll 
      WHERE user_id = ${userID};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollByID(userID, uuid) {

    const query = `
          SELECT title, description, link, img_url
          FROM poll
          WHERE link = '${uuid}'
                And user_id = ${userID};
    `;

    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
