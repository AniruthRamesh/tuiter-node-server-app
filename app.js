import express from "express"
import helloController from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuit-controller.js";
import cors from "cors"
import mongoose from "mongoose"

const app = express()

app.use(express.json());
app.use(cors({
  origin: 'https://a9--hilarious-kitten-f5a246.netlify.app'
}));

helloController(app)
TuitsController(app);
UserController(app)

const connection = async ()=>{
  const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/tuiter' ||
   process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);
  console.log("mongoDB connected");
}
connection();
app.listen(process.env.PORT || 4000)


