const Siswa = require("../models/siswa")

const getData = async (req,res) => {
  try {
    const resData = await Siswa.find().select('name foto').exec();
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
    const resData = await Siswa.findOne().where('_id').equals(id).exec();
    res.json(resData)
  } catch (err) {
    res.json('id not found : ' + err)
  }
}

const postData = async (req,res) => {
  const {name,tanggalLahir,instagram,github,linkedin,hobi,jabatan} = req.body;
  const foto = req.files.foto[0].filename;
  const cv = req.files.cv[0].filename;

  try {
    await Siswa.create({name,jabatan,tanggalLahir,instagram,foto,cv,hobi,github,linkedin,})
    res.json("success post")
  } catch (err) {
    res.json(err.message)
  }
}

const updateData = async (req,res) => {
  const {id} = req.params;
  const {name,tanggalLahir,instagram,github,linkedin,jabatan,hobi} = req.body;
  try {
    const dataSiswaById = await Siswa.findOne().where('_id').equals(id).exec();
    if(!dataSiswaById){
      res.json("data siswa not found ")
    }

    let dataPhoto = [];
    if(req.files.foto && req.files.foto.length > 0){
      dataPhoto = req.files.foto[0].filename
    }else{
      dataPhoto = dataSiswaById.foto
    }

    let dataCv = [];
    if(req.files.cv && req.files.cv.length > 0){
      dataCv = req.files.cv[0].filename
    }else{
      dataCv = dataSiswaById.cv
    }

    const dataUpdate = {
      name: name || dataSiswaById.name,
      tanggalLahir: tanggalLahir || dataSiswaById.tanggalLahir,
      instagram: instagram || dataSiswaById.instagram,
      github: github || dataSiswaById.github,
      linkedin: linkedin || dataSiswaById.linkedin,
      jabatan: jabatan || dataSiswaById.jabatan,
      foto: dataPhoto,
      cv: dataCv,
      hobi: hobi || dataSiswaById.hobi,
    }

    await Siswa.updateOne({_id: id}, dataUpdate);
    res.json('succes update data siswa, id: ' + id)
  } catch (error) {
    res.json(error)
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

module.exports = {getData,getDataById,postData,updateData,deleteData}