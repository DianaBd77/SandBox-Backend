const express = require("express");
const PollController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 



const router = express.Router();


router.get('/', AuthMiddleware.jwtTokenValidation, PollController.getAllPolls);
router.get('/:id', AuthMiddleware.jwtTokenValidation, PollController.getPollByID);
// router.post('/', AuthMiddleware.jwtTokenValidation, PollController.createPoll);
router.patch('/:id', AuthMiddleware.jwtTokenValidation, PollController.updatePoll);
router.delete('/:id', AuthMiddleware.jwtTokenValidation, PollController.removePoll);


module.exports = router;