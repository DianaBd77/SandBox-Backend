const express = require("express");
const AuthMiddleware = require('../../core/middleware/auth');
const UserController = require("./controller");
const UserValidator = require("./validation");



const router = express.Router();


router.post('/login', AuthMiddleware.login);
router.post('/signup', UserValidator.createUserSchema, UserController.createNewUser);




module.exports = router;