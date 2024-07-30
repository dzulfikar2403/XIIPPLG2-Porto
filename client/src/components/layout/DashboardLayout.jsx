import React from "react";
import LogoText from "../element/LogoText";
import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const DashboardLayout = ({children}) => {
  const { logout } = useLogout();

  return (
    <div className="w-full min-h-screen flex">
      <div className=" px-4 py-3 bg-white shadow-xl w-64 fixed top-0 left-0 bottom-0">
        <LogoText />
        <div className="flex flex-col text-sm text-slate-800 gap-8 py-8" id="activeCMS">
          <NavLink to={"/dashboard/home"}>Dashboard</NavLink>
          <NavLink to={"/dashboard/gallery"}>Gallery</NavLink>
          <NavLink to={"/dashboard/dataSiswa"}>Data-Siswa</NavLink>
        </div>
        <div className="flex justify-center">
          <button className="px-4 border-2 border-red-600 text-rose-600 my-8 rounded-3xl text-sm py-1 hover:bg-rose-600 hover:text-white" onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="ml-64 w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
