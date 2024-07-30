const express = require("express");
const router = express.Router();
const siswaController = require("../controllers/siswa");
const upload = require("../config/multerConfig")
router.route('/')
  .get(siswaController.getData)
  .post(upload.fields([{name: "foto",maxCount: 1},{name: "cv",maxCount: 1}]), siswaController.postData)

router.get('/:id',siswaController.getDataById)
router.put('/:id',upload.fields([{name: "foto",maxCount: 1},{name: "cv",maxCount: 1}]),siswaController.updateData)
router.delete('/:id',siswaController.deleteData)

module.exports = router