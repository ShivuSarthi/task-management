const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config({ path: "config/config.env" });

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);

app.use(bodyParser.json());

//Routes
const userRoutes = require("./routers/userRoutes.js");
const taskRoutes = require("./routers/taskRoutes.js");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

//Database Connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connection established...!"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
