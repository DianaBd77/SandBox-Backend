const DatabaseManager = require("../../../core/database/databaseManager");

class ItemRemover {
  static async deleteItemByID(id) {
    const query = `
    DELETE FROM items
    WHERE poll_id = '${id}'`;
    const result = await DatabaseManager.query(query);
    return result;
  }
}

module.exports = ItemRemover;
