const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const orderController = require("../controllers/orderController");


router.post("/", verifyToken.verifyToken, orderController.addOrder)
router.put("/:id", verifyToken.verifyTokenAndAdmin, orderController.updateOrder)
router.delete("/:id", verifyToken.verifyTokenAndAdmin, orderController.deleteOrder)
router.get("/find/:userId", verifyToken.verifyTokenAndAuthorization, orderController.getUserOrders)
router.get("/", verifyToken.verifyTokenAndAdmin, orderController.getAllOrders)
router.get("/income", verifyToken.verifyTokenAndAdmin, orderController.getMonthlyIncome)


module.exports = router;