const express = require("express");
const ParticipantController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ParticipantValidator = require("./validation");


const router = express.Router();



router.get('/:id', ParticipantValidator.getParticipantsByPollIDSchema ,AuthMiddleware.jwtTokenValidation, ParticipantController.getAllParticipantsByPollID);
router.post('/', ParticipantValidator.createParticipantSchema ,AuthMiddleware.jwtTokenValidation, ParticipantController.createNewParticipant);
router.delete('/:id', ParticipantValidator.deleteParticipantSchema ,AuthMiddleware.jwtTokenValidation, ParticipantController.removeParticipants);


module.exports = router;