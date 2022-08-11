const { celebrate, Joi, Segments } = require("celebrate");

class ItemValidator {
  static getItemsByPollIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });

  static createItemSchema = celebrate({
    [Segments.BODY]: Joi.array().items(
      Joi.object().keys({
        poll_id: Joi.number().integer().positive().required(),
        item: Joi.string().required(),
      })
    ).required().min(1),
  });

  static deleteItemSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().positive().required(),
    }).max(1),
  });
}

module.exports = ItemValidator;
