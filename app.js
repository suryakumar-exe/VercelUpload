const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const url = "mongodb://localhost:27017/AlienDBex";
// const url =
//   "mongodb+srv://suryakumar:Surya123@nodejscluster.8tlxqrt.mongodb.net/test";
// const url =
//   "mongodb+srv://suryakumar:Surya123@nodejscluster.8tlxqrt.mongodb.net/?retryWrites=true&w=majority";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log("Server started");
});
