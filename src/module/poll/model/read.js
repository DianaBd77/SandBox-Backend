const DatabaseManager = require("../../../core/database/databaseManager");


class PollReader {
  static async getAllPolls(userID) {
    const query = `
          SELECT o.title, o.description, o.img_url, o.link, COUNT(p.id) as participants, p.name
          FROM poll o
                  LEFT JOIN participant p on o.id = p.poll_id
          WHERE o.user_id = 1
          GROUP BY p.poll_id;
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollByID(userID, uuid) {

    const query = `
          SELECT id, title, description, link, img_url
          FROM poll
          WHERE link = '${uuid}'
                And user_id = ${userID};
    `;

    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
