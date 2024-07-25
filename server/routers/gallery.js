const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/gallery');
const upload = require("../config/multerConfig")

router.route('/')
  .get(galleryController.getData)
  .post(upload.array("images",3),galleryController.postData)

router.get('/:id',galleryController.getDataById)

router.put("/:id",upload.array("images",3),galleryController.updateData)
router.delete("/:id",galleryController.deleteData)

module.exports = router