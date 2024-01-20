const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const userController = require("../controllers/userController");


router.put("/:id", verifyToken.verifyTokenAndAuthorization, userController.updateUser)
router.delete("/:id", verifyToken.verifyTokenAndAuthorization, userController.deleteUser)
router.get("/find/:id", verifyToken.verifyTokenAndAdmin, userController.getUser)
router.get("/", verifyToken.verifyTokenAndAdmin, userController.getAllUsers)
router.get("/stats", verifyToken.verifyTokenAndAdmin, userController.getUserStats)


module.exports = router;