const DatabaseManager = require("../../../core/database/databaseManager");

class PollReader {
  static async getAllPolls(userID) {
    const query = `
      SELECT poll.*, COUNT(p.id) as participants, p.name
      FROM poll LEFT JOIN participant p on poll.id = p.poll_id
      WHERE poll.user_id = ${userID}
      GROUP BY p.poll_id;
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getPollByID(userID, id) {
    //2 queries with less inner joins or?!
    const query = `
      SELECT p.name, o.option, p2.*
      FROM participant p
              INNER JOIN choice c on p.id = c.participant_id
              INNER JOIN options o on c.option_id = o.id
              INNER JOIN poll p2 on o.poll_id = p2.id
      WHERE p2.id = ${id}
              AND p2.user_id = ${userID};
    `;

    // SELECT p.name, o.`option`
    // FROM participant p
    //          INNER JOIN choice c on p.id = c.participant_id
    //          INNER JOIN options o on c.option_id = o.id
    // WHERE o.poll_id = 1;

    // SELECT *
    // FROM poll
    // WHERE id = 1;
    const result = await DatabaseManager.query(query);
    return result[0];
  }
}

module.exports = PollReader;
