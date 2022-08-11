const { celebrate, Joi, Segments } = require("celebrate");

class ChoiceValidator {
  static getChoicesByIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });

  static createChoiceSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
        poll_id: Joi.number().integer().positive(),
        participant_id: Joi.number().integer().positive().required(),
        item_id: Joi.number().integer().positive().required(),
      }).required().min(1),
  });

}

module.exports = ChoiceValidator;
