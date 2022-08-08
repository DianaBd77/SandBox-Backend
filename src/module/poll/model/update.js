const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdater {
  static async updatePoll(id, userData) {
    const { title, description, img_url } = userData;
    const query = `
        UPDATE poll
        SET
          title = '${title}',
          description = '${description}',
          img_url = '${img_url}'
        WHERE id = ${id}`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollUpdater;
