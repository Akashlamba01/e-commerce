const express = require("express");
const router = express.Router();
const productController = require("../../controller/apiv1/product");
const { Joi, celebrate } = require("celebrate");
const auth = require("../../config/middleware");

router.post(
  "/create",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().lowercase().required(),
      quantity: Joi.number().required(),
    }),
  }),
  auth.verifyToken,
  productController.addProduct
);

router.get("/", auth.verifyToken, productController.getProduct);

router.post(
  "/:id/update_quantity/",
  auth.verifyToken,
  productController.updateProduct
);

router.delete("/:id", auth.verifyToken, productController.deletProduct);

module.exports = router;
