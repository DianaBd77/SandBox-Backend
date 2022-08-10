const express = require("express");
const AuthMiddleware = require('../../core/middleware/auth');
const UserController = require("./controller");
const AccountValidator = require("./validation");



const router = express.Router();


router.post('/login', AuthMiddleware.login);
router.post('/signup', AccountValidator.createAccountSchema, UserController.createNewUser);




module.exports = router;