const Gallery = require("../models/gallery");

const getData = async (req, res) => {
  try {
    const resData = await Gallery.find().exec();
    res.json(resData);
  } catch (err) {
    res.json(err);
  }
};

const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const resData = await Gallery.findOne().where("_id").equals(id).exec();
    if (!resData) {
      res.json("data ID not found!");
    } else {
      res.json(resData);
    }
  } catch (err) {
    res.json(err);
  }
};

const postData = async (req, res) => {
  const { name, dateEvent, description } = req.body;
  const files = req.files;
  const arrFiles = files.map((el) => el.filename);

  const maxFile = 3;
  if (files.length > maxFile) {
    res.json("maximal file 3");
  }

  try {
    await Gallery.create({ thumbnail: arrFiles[0], images: arrFiles, name, dateEvent, description });
    res.json("succes post data");
  } catch (err) {
    res.json(err);
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  const { name, dateEvent, description } = req.body;
  try {
    const galleryDataById = await Gallery.findById(id).exec(); //take data awal idnya
    if (!galleryDataById) {
      res.json("data id not found!");
    }

    let imagesUpdt = [];
    if (req.files && req.files.length > 0) {
      imagesUpdt = req.files.map((el) => el.filename);
    } else {
      imagesUpdt = galleryDataById.images;
    }

    const dataUpdate = { 
      thumbnail: imagesUpdt[0], 
      images: imagesUpdt, 
      name: name || galleryDataById.name,
      dateEvent: dateEvent || galleryDataById.dateEvent,
      description: description || galleryDataById 
    };

    await Gallery.updateOne({ _id: id },dataUpdate);
    res.json("succes update data!");
  } catch (error) {
    res.json(error);
  }
};

const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    const dataDelete = await Gallery.deleteOne().where("_id").equals(id).exec();
    if (!dataDelete) {
      res.json("data ID not found!");
    } else {
      res.json("succes deleted id : " + id);
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getData, getDataById, postData, updateData, deleteData };
