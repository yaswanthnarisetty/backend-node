// import { Register } from "./controllers/register";

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./db/User");
const Product = require("./db/Product")
const productss = require("./controllers/getProducts")
app.use(express.json());
app.use(cors());

require("./db/config");

// const connectDB = async() => {
//     mongoose.connect('mongodb://127.0.0.1:27017/cruddb');
//     const data = await User.find();
//     console.log(data)
// }
// connectDB();

app.get("/", (req, res) => {
  console.log("hiiiiiiiiiiii");
  res.send("hello");
});
app.post("/register", async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    console.log(req.body);
  });

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body);
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  } else {
    res.send({ result: "no user found" });
  }
});
app.post("/add-product", async (req,res) =>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result)
})


app.get("/products",productss)

app.delete("/product/:id", async(req,res) => {
    let result = await Product.deleteOne({_id:req.params.id});
    res.send(result)
})

app.get("/product/:id",async (req,res) => {
    let result = await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result)
    }
    else{
        res.send({result:"no data found"})
    }
})

app.put("/product/:id",async (req,res) => {
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        }
    )
    res.send(result)
})










const port = 6001;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
