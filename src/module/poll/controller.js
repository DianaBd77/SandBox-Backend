const PollReader = require("./model/read");
const PollCreator = require("./model/create");
const PollUpdater = require("./model/update");
const PollRemover = require("./model/delete");

class PollController {
  static async getAllPolls(req, res, next) {
    try {
      const userID = req.jwt_payload.id; 
      const polls = await PollReader.getAllPoll(userID);
      res.json(polls);
    } catch (error) {
      next(error);
    }
  }

  static async getPollByUuid(req, res, next) {
    try {
      const { uuid } = req.params;
      const userID = req.jwt_payload.id; 
      const poll = await PollReader.getPollByUuid(userID, uuid);
      res.json(poll);
    } catch (error) {
      next(error);
    }
  }

  static async getPollByID(req, res, next) {
    try {
      const { id } = req.params;
      const userID = req.jwt_payload.id; 
      const poll = await PollReader.getPollByID(userID, id);
      res.json(poll);
    } catch (error) {
      next(error);
    }
  }

  static async createPoll(req, res, next) {
    try {
      const userData = req.body;
      const userID = req.jwt_payload.id; 
      const result = await PollCreator.createPoll(userID, userData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async updatePoll(req, res, next) {
    try {
      const { uuid } = req.params;
      const userData = req.body;
      const result = await PollUpdater.updatePoll(uuid, userData);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  static async removePoll(req, res, next) {
    try {
      const { uuid } = req.params;
      const result = await PollRemover.deletePollByID(uuid);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = PollController;
