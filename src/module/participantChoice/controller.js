const ChoiceRemover = require("./model/delete");
const ChoiceCreator = require("./model/create");
const ChoiceReader = require("./model/read");


class ChoiceController {
  static async getChoiceByID(req, res, next) {
    try {
      const { id } = req.params;
      const choice = await ChoiceReader.getChoiceByID(id);
      res.json(choice);
    } catch (error) {
      next(error);
    }
  }

  static async createNewChoice(req, res, next) {
    try {
      const choice = req.body;
      const result = await ChoiceCreator.createChoice(choice);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async removeChoices(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ChoiceRemover.deleteChoicePollID(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ChoiceController;
