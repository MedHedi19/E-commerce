const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const productController = require("../controllers/productController");


router.post("/", verifyToken.verifyTokenAndAdmin, productController.addProduct)
router.put("/:id", verifyToken.verifyTokenAndAdmin, productController.updateProduct)
router.delete("/:id", verifyToken.verifyTokenAndAdmin, productController.deleteProduct)
router.get("/find/:id", productController.getProduct)
router.get("/", productController.getAllProducts)


module.exports = router;