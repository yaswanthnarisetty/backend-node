import User from "../db/User";

export const register = async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
    console.log(req.body);
  }
