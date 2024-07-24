const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
  thumbnail: String,
  images: [String],
  name: String,
  dateEvent: String,
  description: String
},{timestamps: true})

const Gallery = mongoose.model("Gallery",gallerySchema);

module.exports = Gallery