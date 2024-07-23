import React from "react";

const CardPhotos = ({ photo, title, datePhoto, scale = 1 }) => {
  return (
    <>
      {scale === 2 ? (
        <div className="scale-110 transition-all text-white w-3/4 min-h-full overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B] hover:scale-125 md:scale-105 md:hover:scale-110">
          <img src={`/img/${photo}`} alt="img" className="w-full object-cover object-center rounded-md border border-[#FFBD5B]" />
          <h3 className="text-lg font-semibold py-2">{title}</h3>
          <p>{datePhoto}</p>
        </div>
      ) : (
        <div className="hover:scale-105 transition-all text-white w-3/4 min-h-3/4 overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B]">
          <img src={`/img/${photo}`} alt="img" className="max-h-32 w-full object-cover object-center rounded-md border border-[#FFBD5B]" />
          <h3 className="text-lg font-semibold py-2">{title}</h3>
          <p>{datePhoto}</p>
        </div>
      )}
    </>
  );
};

export default CardPhotos;
