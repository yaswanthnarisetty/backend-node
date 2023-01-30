import Product from "../db/Product";


const getProducts = async (req,res) =>{
    let product = await Product.find();
    if(product.length>0){
        res.send(product)
    }
    else{
        res.send({result:"no products found"})
    }

}

module.exports = getProducts;