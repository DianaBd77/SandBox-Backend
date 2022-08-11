const { celebrate, Joi, Segments } = require("celebrate");

class PollValidator {
  static getPollByIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      uuid: Joi.string().required(),
    }),
  });

  static createPollSchema = celebrate({
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string(),
      img_url: Joi.string(),
    }).required(),
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
    }),
  });
}

module.exports = PollValidator;
