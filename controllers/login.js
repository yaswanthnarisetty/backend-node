import User from "../db/User";

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
