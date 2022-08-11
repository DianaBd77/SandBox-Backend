const DatabaseManager = require("../../../core/database/databaseManager");

class ItemCreator {

  static async  createItem(items) {
    const { poll_id, item } = items;
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
