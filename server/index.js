const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./routers/users");
const galleryRouter = require("./routers/gallery");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//connect mongoose/mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/XIPPLG2")
  .then(() => console.log("mongodb connection succes"))
  .catch((err) => console.log(`mongodb errcon : ${err}`));

//apis
app.get("/", (req, res) => {
  res.json("succes");
});

app.use("/users", usersRouter);
app.use("/gallery", galleryRouter);

app.listen(PORT, (err) => {
  if (err) console.log(`errcon : ${err}`);
  console.log(`succes connect runnning on port ${PORT}`);
});
