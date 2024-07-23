const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, '../client/public/img');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({storage});


router.route('/')
  .get(galleryController.getData)
  .post(upload.array("images",3),galleryController.postData)

router.delete("/:id",galleryController.deleteData)

module.exports = router