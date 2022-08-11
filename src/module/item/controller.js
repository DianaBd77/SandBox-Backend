const ItemRemover = require("../poll/model/delete");
const ItemCreator = require("./model/create");
const ItemReader = require("./model/read");

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

  static async createNewItem(req, res, next) {
    try {
      const itemArray = req.body;
      itemArray.forEach( async (items) => {
       const result =  await ItemCreator.createItem(items);
       res.json(result);
      });
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
