import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Back from "../components/element/Back";
import axios from "axios";
import BottomBar from "../components/element/BottomBar";

const DetailGallery = () => {
  const { id } = useParams();
  const [galleryById, setGalleryById] = useState(null);
  const [mainPic, setMainpic] = useState();

  const fetchGalleryById = async () => {
    const res = await axios.get(`https://secondary-sgd-api.vercel.app/gallery/${id}`);
    setGalleryById(res.data);
  };

  useEffect(() => {
    fetchGalleryById();
  }, []);

  useEffect(() => {
    if (galleryById) {
      setMainpic(`/img/${galleryById.thumbnail}`);
    }
  }, [galleryById]);

  return (
    <>
      {galleryById && (
        <div className="relative min-h-screen bg-[#251F17] ">
          <Back to={"/gallery"} />
          <div className="flex flex-col items-center md:flex-row">
            <div className="w-full md:w-4/5  md:min-h-screen bg-[#FFBD5B] bg-opacity-40 px-6 pt-20 md:py-32 pb-8 flex flex-col">
              <img src={mainPic} alt="img" className="h-56 rounded-lg border-2 border-black object-cover object-center md:h-80" />
              <div className="flex gap-3 py-2">
                {galleryById.images.map((el, i) => (
                  <img
                    key={i}
                    src={`/img/${el}`}
                    alt="img"
                    className={`w-[75px] h-12 rounded-md object-cover object-center ${mainPic === `/img/${el}` ? "border-2 border-black" : "border-none"}`}
                    onMouseOver={() => setMainpic(`/img/${el}`)}
                  />
                ))}
              </div>
            </div>
            <div className="bg-[#251F17] flex flex-col gap-2 text-white w-full px-4 pt-8 pb-20 md:pb-0 md:pt-4">
              <h1 className="text-4xl font-bold md:text-6xl">{galleryById.name}</h1>
              <h4 className="py-2 text-xl">{galleryById.dateEvent}</h4>
              <p className="md:text-lg">{galleryById.description}</p>
            </div>
          </div>
          <BottomBar />
        </div>
      )}
    </>
  );
};

export default DetailGallery;
