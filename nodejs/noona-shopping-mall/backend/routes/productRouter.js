const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post(
  "/",
  authController.authenticate,
  authController.checkAdminPermission,
  productController.createProduct
);
router.get("/", productController.getProducts);
router.put(
  "/:id",
  productController.updateProduct,
  authController.authenticate,
  authController.checkAdminPermission
);
router.delete(
  "/:id",
  authController.authenticate,
  authController.checkAdminPermission,
  productController.deleteProduct
);
router.get("/:id", productController.getProductDetail);

module.exports = router;
