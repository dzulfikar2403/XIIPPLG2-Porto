import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DashboardLayout from "../components/layout/DashboardLayout";

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
          <h1 className="font-normal text-5xl">Hi, <span className="text-3xl font-light">{user.email}</span></h1>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
