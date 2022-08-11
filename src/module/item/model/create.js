const DatabaseManager = require("../../../core/database/databaseManager");

class ItemCreator {

  static async  createItem(pollItem) {
    const { poll_id, name } = pollItem;
    const query = `
      INSERT INTO item
      (poll_id, name)
      VALUES
      (${poll_id}, '${name}');
      `;
    const result = await DatabaseManager.query(query);
    return result;
  }

}

module.exports = ItemCreator;
