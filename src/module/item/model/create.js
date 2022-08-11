const DatabaseManager = require("../../../core/database/databaseManager");

class ItemCreator {

  static async  createItem(pollItem) {
    const { poll_id, item } = pollItem;
    const query = `
      INSERT INTO items
      (poll_id, item)
      VALUES
      (${poll_id}, '${item}');
      `;
    const result = await DatabaseManager.query(query);
    return result;
  }

}

module.exports = ItemCreator;
