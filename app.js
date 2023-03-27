import express from "express"
import helloController from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuit-controller.js";
import cors from "cors"

const app = express()

app.use(express.json());
app.use(cors())

helloController(app)
TuitsController(app);
UserController(app)

app.listen(process.env.PORT || 4000)


