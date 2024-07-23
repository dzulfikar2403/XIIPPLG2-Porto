import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome,HiClipboardList,HiBookOpen } from "react-icons/hi";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <div className="w-full min-h-screen px-4 py-2">
      <h1>Dashboard XII PPLG 2</h1>
      {toggle === true ? (
        <div className="fixed left-0 top-[50%] -translate-y-[50%] bg-white min-h-56 w-16 rounded-r-2xl shadow-2xl">
          <button className="absolute -right-4 top-[50%] -translate-y-[50%] rounded-full bg-black px-2 py-1 text-white" onClick={handleToggle}>
            {"<"}
          </button>
          <div className="absolute top-[50%] -translate-y-[50%]">
            <div className="flex flex-col gap-12 px-4">
              <Link title="Dashboard" to={'/dashboard'}>
                <HiHome />
              </Link>
              <Link title="Gallery" to={'/dashboard/gallery'}>
                <HiBookOpen />
              </Link>
              <Link title="Data-siswa" to={'/dashboard/dataSiswa'}>
                <HiClipboardList />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed -left-16 top-[50%] -translate-y-[50%] bg-black min-h-56 w-16 rounded-r-2xl">
          <button className="absolute -right-4 top-[50%] -translate-y-[50%] rounded-full bg-black px-2 py-1 text-white" onClick={handleToggle}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
