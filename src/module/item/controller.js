const ItemRemover = require("./model/delete");
const ItemCreator = require("./model/create");
const ItemReader = require("./model/read");
const DatabaseManager = require("../../core/database/databaseManager");


class OptionController {

  static async getAllItems(req, res, next) {
    try {
      const {id} = req.params; 
      const items = await ItemReader.getAllItems(id);
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async getItemByID(req, res, next) {
    try {
      const { id } = req.params;
      const item = await ItemReader.getItemsByID(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }



  static async createNewItem(req, res, next) {
    try {
      const itemArray = req.body;
      itemArray.forEach( async (item) => {
      await ItemCreator.createItem(item);
      });
      const pollID = itemArray[0].poll_id;
      const pollQuery = `SELECT id FROM poll WHERE id = ${pollID}`;
      const findPollByID = await DatabaseManager.query(pollQuery);
      if(findPollByID[0].length === 0){
        res.status(404).send({ message: "Poll doesn't Exist!"});
        return;
      }
      res.send({ message: "Create Items Successfully"});
    } catch (error) {
      next(error);
    }
  }

  static async removeItem(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ItemRemover.deleteItemByID(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = OptionController;
