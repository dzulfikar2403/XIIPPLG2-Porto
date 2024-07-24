const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if(file.fieldname === "images") cb(null, '../client/public/img');
    if(file.fieldname === "foto") cb(null, '../client/public/siswaImg');
    if(file.fieldname === "cv") cb(null, '../client/public/cv');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({storage});

module.exports = upload