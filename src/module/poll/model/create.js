const DatabaseManager = require("../../../core/database/databaseManager");
const { v4: uuidv4 } = require('uuid');

class PollCreator {
  static async createPoll(userID, userData) {
    const { title, description, img_url } = userData;
    let uuid = uuidv4();
    let link = uuid;
    const pollQuery = `
      INSERT INTO poll
      (user_id, title, description, link, img_url)
      VALUES
      ('${userID}', '${title}', '${description}', '${link}', '${img_url}');
      `;
    const result = await DatabaseManager.query(pollQuery);
    return result;
  }
}

module.exports = PollCreator;
