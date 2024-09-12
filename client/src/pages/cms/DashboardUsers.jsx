import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardUsers = () => {
  const { user } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const [dataUsers, setDataUsers] = useState(null);

  const getUsers = async () => {
    const { data } = await axios.get("https://secondary-sgd-api.vercel.app/users");
    setDataUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <DashboardLayout>
      <h1 className="justify-items-start w-full text-3xl font-semibold p-8">Data-Users</h1>
      <div className="flex justify-center items-center mb-12">
        <table>
          <tr>
            <th>_id</th>
            <th>name</th>
            <th>email</th>
            <th>aksi</th>
          </tr>
          {dataUsers &&
            dataUsers.map((el, i) => (
              <tr key={i}>
                <td>{el._id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <button className="p-2 bg-red-500 rounded text-white mr-2">Del</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </DashboardLayout>
  );
};

export default DashboardUsers;
