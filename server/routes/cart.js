const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const cartController = require("../controllers/cartController");


router.post("/", verifyToken.verifyToken, cartController.addCart)
router.put("/:id", verifyToken.verifyTokenAndAuthorization, cartController.updateCart)
router.delete("/:id", verifyToken.verifyTokenAndAuthorization, cartController.deleteCart)
router.get("/find/:userId", verifyToken.verifyTokenAndAuthorization, cartController.getUserCart)
router.get("/", verifyToken.verifyTokenAndAdmin, cartController.getAllCarts)


module.exports = router;