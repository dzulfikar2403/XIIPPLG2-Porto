import React, { useEffect, useState } from "react";
import {  HiArrowNarrowRight } from "react-icons/hi";
import {  useParams } from "react-router-dom";
import rectangle26 from "../assets/Rectangle 26.svg";
import rectangle27 from "../assets/Rectangle 27.svg";
import rectangle28 from "../assets/Rectangle 28.svg";
import rectangle11 from "../assets/Rectangle 11.svg";
import rectangle12 from "../assets/Rectangle 12.svg";
import SosmedIcon from "../components/element/SosmedIcon";
import axios from "axios";
import BottomBar from "../components/element/BottomBar";
import Back from "../components/element/Back";

const DetailSiswa = () => {
  const { id } = useParams();
  const [detailSiswa, setDetailSiswa] = useState(null);

  const fetchDetailData = async () => {
    const res = await axios.get(`http://localhost:3000/siswa/${id}`);
    setDetailSiswa(res.data);
  };

  useEffect(() => {
    fetchDetailData();
  }, []);

  return (
    <div className="h-full bg-[#251F17] min-h-screen w-full py-1 px-4 md:px-0 ">
      <Back to={'/dataSiswa'} />

      <div className="flex flex-col md:flex-row ">
        {/* <p className="text-white text-xl mx-auto">on progress</p> */}
      {/* icon */}
        <div className="flex gap-8 justify-evenly  md:flex-col  md:items-center md:w-4/12 md:min-h-screen">
          <div className="mt-36 md:mt-0 md:ml-28">
            <img src={rectangle26} alt="img" className="w-10" />
          </div>
          <div className="mt-10 md:mt-0 md:-ml-28">
            <img src={rectangle27} alt="img" className="w-10" />
          </div>
          <div className="mt-12 md:mt-0 md:ml-16">
            <img src={rectangle28} alt="img" className="w-10" />
          </div>
          <div className="mt-8 md:mt-0 md:-ml-28">
            <img src={rectangle11} alt="img" className="w-10" />
          </div>
          <div className="mt-36 md:mt-0 md:ml-20">
            <img src={rectangle12} alt="img" className="w-10" />
          </div>
        </div>

        {detailSiswa && (
          <>
            {/* main container */}
            <div className={`w-full bg-dopImg bg-no-repeat bg-[length:100%_95%]`}>
              <div className="md:min-h-screen md:w-[90%]  flex justify-center flex-col items-center md:flex-row md:gap-12  ">
              <div className="-mt-16 border-4 md:border-8 border-[#251F17] bg-[#FFBD5B] rounded-full w-44 h-44 overflow-hidden md:w-64 md:h-64 md:-ms-32">
                <img src={`/siswaImg/${detailSiswa.foto}`} alt="img" className="object-cover object-top mx-auto md:scale-125 md:object-top" />
              </div>
              <div className="text-start py-3 ">
                <div className="py-3">
                  <h1 className="text-3xl text-white font-bold pt-2 pb-3 md:text-6xl md:pb-5">{detailSiswa.name}</h1>
                  <h4 className="text-xl text-white">
                    <b>Birth : </b>
                    <span>{detailSiswa.tanggalLahir}</span>
                  </h4>
                  <h4 className="text-xl text-white">
                    <b>Hobby : </b>
                    <span>{detailSiswa.hobi.map(el => el).join(', ')}</span>
                  </h4>
                  <h4 className="text-xl text-white">
                    <b>position : </b>
                    <span>{detailSiswa.jabatan}</span>
                  </h4>
                </div>

                {/* button section */}
                <div className="flex gap-2 md:py-4">
                  <button className="bg-black text-[#FFBD5B] py-1 px-4 font-medium rounded-3xl flex items-center gap-2" onClick={() => window.open(`../../public/cv/${detailSiswa.cv}`)}>
                    <span>Resume</span>
                    <HiArrowNarrowRight />
                  </button>
                  {detailSiswa.instagram && (
                    <SosmedIcon href={detailSiswa.instagram}>
                      <svg role="img" viewBox="0 0 24 24" width={22} height={22} xmlns="http://www.w3.org/2000/svg">
                        <title>Instagram</title>
                        <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                      </svg>
                    </SosmedIcon>
                  )}
                  {detailSiswa.linkedin && (
                    <SosmedIcon href={detailSiswa.linkedin}>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 50 50">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                      </svg>
                    </SosmedIcon>
                  )}
                  {detailSiswa.github && (
                    <SosmedIcon href={detailSiswa.github}>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>
                    </SosmedIcon>
                  )}
                </div>
              </div>
              {/* footer */}
                  <BottomBar />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailSiswa;
