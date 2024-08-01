import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";
import abstractImg from "../assets/abstract-design.jpg";
import logoClass from "../assets/logoXIIPPLG2New.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <DashboardLayout>
      <div className="p-4 m-4 h-full ">
        {user && (
          <h1 className="font-normal text-5xl">
            Hi, <span className="text-3xl font-light">{user.email}</span>
          </h1>
        )}
        <div className={`mx-auto text-center py-2 w-3/4 bg-abstract border-4 overflow-hidden border-white shadow-lg object-cover my-4 rounded`}>
          <img src={logoClass} alt={logoClass} className="rounded-full mx-auto w-36 h-36 my-2" />
          <h1 className="text-lg font-semibold ">
            Discovering <br /> about the class
          </h1>
          <p className="text-xs py-2">Our practice actively checks complete environment configurations to ensure our application seamlessly supports student data portfolios.</p>
        </div>
        <div className="flex flex-col justify-around h-32">
          <hr className="mx-auto bg-slate-950 py-1 rounded-2xl mt-2 w-3/4" />
          <hr className="mx-auto bg-slate-600 py-1 rounded-2xl mt-2 w-[85%]" />
          <hr className="mx-auto bg-slate-400 py-1 rounded-2xl mt-2 w-3/4" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
