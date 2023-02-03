import express from "express"
const router = express.Router()
import {getProducts,deleteProduct,addProduct,findProduct,updateProduct} from "../controllers/productController.js"
import {Search} from "../controllers/searchController.js";
import {login,register,verifyToken} from "../controllers/authController.js";

router.get("/", (req, res) => {
    console.log("hiiiiiiiiiiii");
    res.send("hello");
  });

router.post("/register",register);

router.post("/login",login );

router.post("/add-product",verifyToken,addProduct);

router.get("/products",verifyToken,getProducts);

router.delete("/product/:id",verifyToken, deleteProduct);

router.get("/product/:id",verifyToken,findProduct);

router.put("/product/:id",verifyToken,updateProduct);

router.get("/search/:key",verifyToken,Search)
export default router;
