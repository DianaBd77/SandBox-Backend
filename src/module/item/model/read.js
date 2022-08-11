const DatabaseManager = require("../../../core/database/databaseManager");


class ItemReader {
  static async getAllItems(id) {
    const query = `
      SELECT item
      FROM items
      WHERE poll_id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

}

module.exports = ItemReader;
