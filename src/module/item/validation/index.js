const { celebrate, Joi, Segments } = require("celebrate");

class PollValidator {
  static getItemsByPollIDSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().positive().required(),
    }),
  });

//   static createItemSchema = celebrate({
//     [Segments.BODY]: Joi.object().keys({
//       poll_id: Joi.number().integer().positive().required(),
//       item: Joi.string().required(),
//     }),
//   });


  static deleteItemSchema = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().positive().required(),
    }),
  });
}

module.exports = PollValidator;
