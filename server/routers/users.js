const express = require('express');
const router = express.Router();
const userAuthController = require('../controllers/usersAuth')

router.route("/")
  .get(userAuthController.getUser)
  
router.post('/register',userAuthController.postUserRegister) //for register
router.post('/login',userAuthController.postUserLogin) //for register

router.put("/:id",userAuthController.updateUser)

router.delete("/:id",userAuthController.deleteUser)

module.exports = router;