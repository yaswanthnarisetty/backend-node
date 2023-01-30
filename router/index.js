import express from "express"
const router = express.Router()
import {getProduct,deleteProduct,addProduct,findProduct,updateProduct} from "../controllers/productController"

import login from "../controllers/login";
import register from "../controllers/register";



router.post("/register",register);

router.post("/login",login );

router.post("/add-product",addProduct);

router.get("/products",getProduct);

router.delete("/product/:id", deleteProduct);

router.get("/product/:id",findProduct);

router.put("/product/:id",updateProduct);

export {router}
