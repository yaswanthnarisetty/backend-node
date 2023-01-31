import User from "../db/User.js";

export const login = async (req, res) => {
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
}


export const register = async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    console.log(req.body);
  }