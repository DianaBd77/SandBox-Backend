const express = require("express");
const ItemController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ItemValidator = require("./validation");

const router = express.Router();


router.get('/:id', ItemValidator.getItemsByPollIDSchema , AuthMiddleware.jwtTokenValidation, ItemController.getAllItems);
router.post('/', AuthMiddleware.jwtTokenValidation, ItemController.createNewItem);
router.delete('/:id', ItemValidator.deleteItemSchema ,AuthMiddleware.jwtTokenValidation, ItemController.removeItem);


module.exports = router;