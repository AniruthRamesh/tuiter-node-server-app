import express from "express"
import helloController from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuit-controller.js";
import cors from "cors"
import mongoose from "mongoose"

const app = express()



app.use(cors());
app.use(express.json());

helloController(app)
TuitsController(app);
UserController(app)

const connection = async ()=>{
  const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter' 
  //const CONNECTION_STRING =  'mongodb://127.0.0.1:27017/tuiter' 
  //const CONNECTION_STRING = 'mongodb+srv://tuiter:tuiter@cluster0.2kmo3bb.mongodb.net/?retryWrites=true&w=majority&dbname=tuiter'
  mongoose.connect(CONNECTION_STRING);
  console.log("mongoDB connected");
  console.log(CONNECTION_STRING);
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB database connection successful!');
  });
}
connection();

app.listen(process.env.PORT || 4000)


