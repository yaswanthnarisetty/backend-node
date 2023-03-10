import Product from '../models/Product.js';
 export  const  addProduct =  async (req,res) =>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result)
}

 export const findProduct = async (req,res) => {
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }
    else{
        res.send({result:"no data found"})
    }
}

 export const getProducts = async (req,res) =>{
    console.log(req.role)
    let product
    if(req.role === "admin"){
        product = await Product.find();
    }
    else{
        product = await Product.find({userId:req.userId})
    }
    
    if(product.length>0){
        res.send(product)
    }
    else{
        res.send({result:"no products found"})
    }

}

 export const deleteProduct = async(req,res) => {
    let result = await Product.deleteOne({_id:req.params.id});
    res.send(result)
}

 export const updateProduct = async (req,res) => {
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)
}

export default {addProduct,findProduct,updateProduct,getProducts,deleteProduct};