import React from "react";

const CardPhotos = ({ data, scale = 1 }) => {
  return (
    <>
      {scale === 2 && data ? (
        <div className="scale-110 transition-all text-white w-3/4 min-h-full overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B] hover:scale-125 md:scale-105 md:hover:scale-110">
          <img src={`/img/${data.thumbnail}`} alt="img" className="w-full max-h-48 object-cover object-center rounded-md border border-[#FFBD5B]" />
          <h3 className="md:text-lg font-semibold py-2">{data.name}</h3>
          <p>{data.dateEvent}</p>
        </div>
      ) : (
        <div className="hover:scale-105 transition-all text-white w-3/4 min-h-3/4 overflow-hidden px-4 py-2 bg-[#FFBD5B] bg-opacity-40 rounded-md border-2 border-[#FFBD5B]">
          <img src={`/img/${data.thumbnail}`} alt="img" className="max-h-44 w-full object-cover object-center rounded-md border border-[#FFBD5B]" />
          <div className="md:pb-4 md:pt-2">
            <h3 className="md:text-lg font-semibold ">{data.name}</h3>
            <p className="text-sm font-light">{data.dateEvent}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPhotos;
