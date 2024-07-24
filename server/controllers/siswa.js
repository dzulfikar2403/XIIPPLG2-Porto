const Siswa = require("../models/siswa")

const getData = async (req,res) => {
  try {
    const resData = await Siswa.find().exec();
    if(resData.length !== 0){
      res.json(resData)
    }else{
      res.json("data masih kosong!")
    }
  } catch (err) {
    res.json(err)
  }
}

const getDataById = async (req,res) => {
  const {id} = req.params;
  try {
    const resData = await Siswa.findOne().where('_id').equals(id).select('name foto').exec();
    res.json(resData)
  } catch (err) {
    res.json('id not found : ' + err)
  }
}

const postData = async (req,res) => {
  const {name,tanggalLahir,instagram,hobi,jabatan} = req.body;
  const foto = req.files.foto[0].filename;
  const cv = req.files.cv[0].filename;

  try {
    await Siswa.create({name,tanggalLahir,instagram,hobi,jabatan,foto,cv})
    res.json("success post")
  } catch (err) {
    res.json(err.message)
  }
}

const deleteData = async (req,res) => {
  const {id} = req.params;
  try {
    const resData = await Siswa.deleteOne().where('_id').equals(id).exec();
    res.json(resData)
  } catch (err) {
    res.json('id not found : ' + err)
  }
}

module.exports = {getData,getDataById,postData,deleteData}