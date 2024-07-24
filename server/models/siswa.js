const mongoose = require("mongoose")

const siswaSchema = new mongoose.Schema({
  name: String,
  tanggalLahir : String,
  instagram : String,
  github : String,
  linkedin : String,
  jabatan : String,
  foto: String,
  cv: String,
  hobi : [String],
},{timestamps: true})

const Siswa = mongoose.model("Siswa",siswaSchema);

module.exports = Siswa