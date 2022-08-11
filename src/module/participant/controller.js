const ParticipantRemover = require("./model/delete");
const ParticipantCreator = require("./model/create");
const ParticipantReader = require("./model/reade");


class ParticipantController {
  static async getAllParticipantsByPollID(req, res, next) {
    try {
      const { id } = req.params;
      const items = await ParticipantReader.getAllParticipant(id);
      res.json(items);
    } catch (error) {
      next(error);
    }
  }

  static async createNewParticipant(req, res, next) {
    try {
      const participantData = req.body;
      console.log('participantData :>> ', participantData);
      const result = await ParticipantCreator.createParticipant(participantData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async removeParticipants(req, res, next) {
    try {
      const { id } = req.params;
      const result = await ParticipantRemover.deleteParticipantByPollID(id);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ParticipantController;
