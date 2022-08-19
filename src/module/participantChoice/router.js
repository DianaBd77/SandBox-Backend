const express = require("express");
const ChoiceController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth");
const ChoiceValidator = require("./validation");

const router = express.Router();

router.get(
  "/:id",
  ChoiceValidator.getChoicesByIDSchema,
  AuthMiddleware.jwtTokenValidation,
  ChoiceController.getChoiceByID
);
router.get(
  "/id/:id",
  ChoiceValidator.getChoicesByIDSchema,
  ChoiceController.getChoiceByPollID
);
router.post(
  "/",
  ChoiceValidator.createChoiceSchema,
  ChoiceController.createNewChoice
);
router.delete(
  "/:id",
  ChoiceValidator.getChoicesByIDSchema,
  AuthMiddleware.jwtTokenValidation,
  ChoiceController.removeChoices
);

module.exports = router;
