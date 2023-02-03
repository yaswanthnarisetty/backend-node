import User from "../models/User.js";
import Jwt  from "jsonwebtoken";

const jwtKey = "yash"

export const login = async (req, res) => {
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body);
      if (user) {
        Jwt.sign({user},jwtKey,(err,token) =>{
          if(err){
            res.send({result : "something went wrong"});
          }
          res.send({user , auth: token });
        })
        
      } else {
        res.send({ result: "no user found" });
      }
    } else {
      res.send({ result: "no user found" });
    }
}


export const register = async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();

    Jwt.sign({result},jwtKey,(err,token) =>{
      if(err){
        res.send({result : "something went wrong"});
      }
      res.send({result , auth: token });
    })
  }

export function verifyToken(req,res,next){
  let token = req.headers['authorization']
  if(token){
    Jwt.verify(token,jwtKey,(err , valid)=>{
      if(err){
        res.send("please enter a valid token");
      }
      else{
        next()
      }
    })
  }
  else{
      res.send("please add a token")

  }
}