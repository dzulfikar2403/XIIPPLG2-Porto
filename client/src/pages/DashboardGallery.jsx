import React, { useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../redux/reducer/gallerySlice";

const DashboardGallery = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { gallery } = useSelector((state) => state.gallerySlice);

  useEffect(() => {
    dispatch(getGallery());
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <DashboardLayout>
      <h1 className="justify-items-start w-full text-3xl font-semibold p-8">Data Gallery</h1>
      <div className="flex justify-center items-center ">
        <table>
          <tr>
            <th>_id</th>
            <th>images</th>
            <th>name</th>
            <th>aksi</th>
          </tr>
          {gallery &&
            gallery.map((el, i) => (
              <tr key={i}>
                <td>{el._id}</td>
                <td className="flex flex-wrap gap-2">
                  {el.images.map((el, i) => (
                    <span key={i}><img src={`/img/${el}`} alt={i} className="max-h-10" /></span>
                  ))}
                </td>
                <td>{el.name}</td>
                <td>
                  <button className="p-2 bg-teal-500 rounded text-white mr-2">Dtl</button>
                  <button className="p-2 bg-yellow-500 rounded text-white mr-2">edit</button>
                  <button className="p-2 bg-red-500 rounded text-white mr-2">Del</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </DashboardLayout>
  );
};

export default DashboardGallery;
