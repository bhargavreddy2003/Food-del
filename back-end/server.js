import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./Routes/foodRoute.js";

const App = express();
const port = 6969;
//middlewares//

App.use(express.json());
App.use(cors());
// DB connection
connectDB();
//------api-endpoint--------//

//creating api endpoint for food routes
App.use("/api/food", foodRouter);
//-----------------------------//

App.get("/", (req, res) => {
  res.send(`server is running ${port}`);
});

App.listen({ port }, console.log("server is runnig"));
// mongodb+srv://mvsbhargavreddy:Speed400@9018@hungerbites.mbfuqou.mongodb.net/?retryWrites=true&w=majority&appName=HungerBites
