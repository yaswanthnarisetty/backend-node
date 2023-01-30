// import { Register } from "./controllers/register";
import express from "express";
import cors from "cors"
import router from "./router/index.js";
const app = express();

app.use(express.json());
app.use(cors());

// require("./db/config");

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




app.use(router)







const port = 6001;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
