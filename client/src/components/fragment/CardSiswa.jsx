import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CardSiswa = ({data}) => {
  return (
    <div className="relative border border-[#FFBD5B] w-52 h-64 rounded-lg bg-[#FFBD5B] bg-opacity-30">
      <div className="w-full p-4">
        <h4 className="text-xl font-bold text-white mb-4">{data.name}</h4>
        <Link to={`/dataSiswa/${data._id}`} className="w-1/2 px-4 py-1 cursor-pointer bg-[#FFBD5B] rounded-3xl text-sm font-bold flex items-center gap-1" >
          More{" "}
          <span className="-rotate-[30deg]">
            <HiArrowNarrowRight />
          </span>
        </Link>
        <img src={`/siswaImg/${data.foto}`} alt="imgProfile" className="absolute bottom-0 -right-3 w-40" />
      </div>
    </div>
  );
};

export default CardSiswa;
