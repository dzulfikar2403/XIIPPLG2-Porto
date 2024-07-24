const mongoose = require("mongoose")

const siswaSchema = new mongoose.Schema({
  name: String,
  tanggalLahir : String,
  instagram : String,
  hobi : [String],
  jabatan : String,
  foto: String,
  cv: String,
},{timestamps: true})

const Siswa = mongoose.model("Siswa",siswaSchema);

module.exports = Siswa