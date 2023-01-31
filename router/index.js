import express from "express"
const router = express.Router()
import {getProducts,deleteProduct,addProduct,findProduct,updateProduct} from "../controllers/productController.js"

import {login,register} from "../controllers/authController.js";



router.post("/register",register);

router.post("/login",login );

router.post("/add-product",addProduct);

router.get("/products",getProducts);

router.delete("/product/:id", deleteProduct);

router.get("/product/:id",findProduct);

router.put("/product/:id",updateProduct);

export default router;
