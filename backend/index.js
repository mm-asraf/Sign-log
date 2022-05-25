const express = require("express");
const cors = require("cors");
const connectDb = require("./src/configs/db");
const app = express();

connectDb();

app.use(express.json());
app.use(cors());

//controller
const userController = require("./src/controller/user.controller");

//routes
app.use("/user", userController);

const PORT = 3002;
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));
