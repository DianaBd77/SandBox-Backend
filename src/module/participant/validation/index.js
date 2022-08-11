const { celebrate, Joi, Segments } = require("celebrate");

class ParticipateValidator {
  static getParticipantsByPollIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });

  static createParticipantSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
        poll_id: Joi.number().integer().positive().required(),
        name: Joi.string().required(),
      }).required().min(1),
  });

  static deleteParticipantSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });
}

module.exports = ParticipateValidator;
