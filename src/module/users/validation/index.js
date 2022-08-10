const { celebrate, Joi, Segments } = require('celebrate');


class UserValidator {
    static getUserByIDSchema = celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().integer().positive().required(),
          })
        })
}


module.exports = UserValidator;