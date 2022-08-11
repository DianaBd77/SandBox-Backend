const DatabaseManager = require("../../../core/database/databaseManager");

class PollUpdater {
  static async updatePoll(uuid, userData) {
    const updateVar = [];
    Object.keys(userData).forEach(key => {
      updateVar.push(`${key} = '${userData[key]}'`)
    })
    const query = `
        UPDATE poll
        SET
        ${updateVar.join(',')}
        WHERE link = '${uuid}'
        `;   
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = PollUpdater;
