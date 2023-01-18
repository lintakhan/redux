import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoute from "./routes/user.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Routes
app.use("/user", userRoute);

// Mongoose
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
  .catch((error) => console.log(error.message));
