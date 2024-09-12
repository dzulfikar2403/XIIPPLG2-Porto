require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRouter = require("./routers/users");
const galleryRouter = require("./routers/gallery");
const siswaRouter = require("./routers/siswa");
const app = express();
const mongodbUrl = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["https://secondary-sgd.vercel.app","http://localhost:5173"],
}));

//connect mongoose/mongodb
mongoose
  .connect(mongodbUrl)
  .then(() => console.log("mongodb connection succes"))
  .catch((err) => console.log(`mongodb errcon : ${err}`));

//apis
app.get("/", (req, res) => {
  res.json("succes");
});

app.use("/users", usersRouter);
app.use("/gallery", galleryRouter);
app.use("/siswa", siswaRouter);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.log(`errcon : ${err}`);
  console.log(`succes connect runnning on port ${process.env.PORT}`);
});
