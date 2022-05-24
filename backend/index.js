const express = require("express");
const cors = require("cors");
const connectDb = require("./src/configs/db");
const app = express();

connectDb();

app.use(express.json());
app.use(cors());

const PORT = 3002;
app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));
