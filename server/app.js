const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());

// middleware
app.use(express.json());

dotenv.config({ path: "./config.env" });
require("./db/conn");

const port = 5000;

//routes

app.use("/api/v1/bootcamps/",require("./routes/auth"));


//error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
