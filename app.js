import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from './controllers/tuits/tuits-controller.js'

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(CONNECTION_STRING);
TuitsController(app);
HelloController(app);
UserController(app);


app.listen(process.env.PORT || 4000);
