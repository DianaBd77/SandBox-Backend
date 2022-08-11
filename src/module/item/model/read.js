const DatabaseManager = require("../../../core/database/databaseManager");


class ItemReader {
  static async getAllItems(id) {
    const query = `
      SELECT id, item
      FROM items
      WHERE poll_id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

  static async getItemsByID(id) {
    const query = `
      SELECT item
      FROM items
      WHERE id = ${id};
    `;
    const result = await DatabaseManager.query(query);
    return result[0];
  }

}

module.exports = ItemReader;
