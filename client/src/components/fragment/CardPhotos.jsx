import React from "react";

const CardPhotos = ({ photo, title, datePhoto, scale = 1 }) => {
  return (
    <>
      {scale === 2 ? (
        <div className="scale-125 text-white w-3/4 h-3/4 overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B]">
          <img src={photo} alt="img" className="rounded-md border h-2/3 w-full border-[#FFBD5B]" />
          <h3 className="text-lg font-semibold py-2">{title}</h3>
          <p>{datePhoto}</p>
        </div>
      ) : (
        <div className="text-white w-3/4 h-3/4 overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B]">
          <img src={photo} alt="img" className="rounded-md border h-2/3 w-full border-[#FFBD5B]" />
          <h3 className="text-lg font-semibold py-2">{title}</h3>
          <p>{datePhoto}</p>
        </div>
      )}
    </>
  );
};

export default CardPhotos;
