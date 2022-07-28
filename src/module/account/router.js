const express = require("express");
const AuthMiddleware = require('../../core/middleware/auth');
const UserController = require("./controller");



const router = express.Router();


router.post('/login', AuthMiddleware.login);
router.post('/signup', UserController.createNewUser);



module.exports = router;