const express = require("express");
const UserController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 


const router = express.Router();


router.get('/', AuthMiddleware.jwtTokenValidation, UserController.getAllUsers);
router.get('/:id', AuthMiddleware.jwtTokenValidation, UserController.getUserByID);
// router.post('/', UserController.createNewUser);
// router.patch('/:id', UserController.updateUser);
// router.delete('/:id', UserController.removeUser);


module.exports = router;