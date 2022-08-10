const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdater {
  static async updatePoll(uuid, userData) {
    const { title, description, img_url } = userData;
    const query = `
        UPDATE poll
        SET
          title = '${title}',
          description = '${description}',
          img_url = '${img_url}'
        WHERE link = '${uuid}'
        `;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollUpdater;
