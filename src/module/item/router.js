const express = require("express");
const ItemController = require("./controller");
const AuthMiddleware = require("../../core/middleware/auth"); 
const ItemValidator = require("./validation");

const router = express.Router();


router.get('/:id', ItemValidator.getItemsByIDSchema , ItemController.getAllItems);
router.get('/id/:id', ItemValidator.getItemsByIDSchema ,AuthMiddleware.jwtTokenValidation, ItemController.getItemByID);
router.post('/', ItemValidator.createItemSchema ,AuthMiddleware.jwtTokenValidation, ItemController.createNewItem);
router.delete('/:id', ItemValidator.getItemsByIDSchema ,AuthMiddleware.jwtTokenValidation, ItemController.removeItem);


module.exports = router;