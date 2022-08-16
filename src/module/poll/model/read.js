const DatabaseManager = require("../../../core/database/databaseManager");


class PollReader {
  static async getAllPoll(userID) {
    const query = `
          SELECT poll.*, p.name, COUNT(p.id) as participants
          FROM poll 
              LEFT JOIN participant p on p.poll_id = poll.id
          WHERE user_id = ${userID}
          GROUP BY poll.id;

    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollByUuid(userID, uuid) {

    const query = `
          SELECT id, title, description, link, img_url
          FROM poll
          WHERE link = '${uuid}'
                And user_id = ${userID};
    `;

    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollByID(userID, id) {

    const query = `
          SELECT link
          FROM poll
          WHERE id = ${id}
                And user_id = ${userID};
    `;

    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
