const express = require("express");
const ChoiceController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ChoiceValidator = require("./validation");


const router = express.Router();



router.get('/:id', ChoiceValidator.getChoicesByIDSchema ,AuthMiddleware.jwtTokenValidation, ChoiceController.getChoiceByID);
router.post('/', ChoiceValidator.createChoiceSchema ,AuthMiddleware.jwtTokenValidation, ChoiceController.createNewChoice);
router.delete('/:id', ChoiceValidator.getChoicesByIDSchema ,AuthMiddleware.jwtTokenValidation, ChoiceController.removeChoices);


module.exports = router;