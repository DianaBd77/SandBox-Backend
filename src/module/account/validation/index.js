const { celebrate, Joi, Segments } = require('celebrate');


class AccountValidator {
    static createAccountSchema = celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().min(8).required(),
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required()
        }).min(1),
        })
}




module.exports = AccountValidator;