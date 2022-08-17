const { celebrate, Joi, Segments } = require("celebrate");

class PollValidator {
  static getPollByUuidSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().required(),
    }).max(1),
  });

  static getPollByIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });

  static createPollSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.optional().default(null),
      img_url: Joi.optional().default(null)
    }).min(1),
  });

  static updatePollSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string(),
      description: Joi.string(),
      img_url: Joi.string(),
    }).min(1),
  });

  static deletePollSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().required(),
    }).max(1),
  });
}

module.exports = PollValidator;
