import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataSiswa } from "../../redux/reducer/siswaSlice";

const DashboardSiswa = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { dataSiswa } = useSelector((state) => state.siswaSlice);
  const [toggleTambah, setToggleTambah] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    dispatch(getDataSiswa());
  }, []);

  return (
    <DashboardLayout>
      <div className={toggleTambah ? "blur" : ""}>
        <h1 className="w-full text-3xl font-semibold p-8">Data-Siswa</h1>
        <button className="px-2 py-1 bg-teal-500 text-white rounded-lg font-medium my-4 mx-8" onClick={() => setToggleTambah((pre) => !pre)}>
          Tambah
        </button>
        <div className="flex justify-center items-center mb-12">
          <table>
            <tr>
              <th>_id</th>
              <th>image</th>
              <th>name</th>
              <th>aksi</th>
            </tr>
            {dataSiswa &&
              dataSiswa.map((el, i) => (
                <tr key={i}>
                  <td>{el._id}</td>
                  <td>
                    <span>
                      <img src={`/siswaImg/${el.foto}`} alt={i} className="h-10" />
                    </span>
                  </td>
                  <td>{el.name}</td>
                  <td>
                    <button className="p-2 bg-yellow-500 rounded text-white mr-2">edit</button>
                    <button className="p-2 bg-red-500 rounded text-white mr-2">Del</button>
                  </td>
                </tr>
              ))}
          </table>
        </div>
      </div>
      {toggleTambah && (
        <div className="fixed top-[50%] -translate-y-[50%] w-3/4 h-4/5 bg-slate-300">
          <button className="absolute -right-3 -top-3 text-xl font-semibold px-2 rounded-full bg-slate-100 hover:bg-slate-50" onClick={() => setToggleTambah((pre) => !pre)}>
            X
          </button>
          <form className="flex flex-col  py-8">
            <div className="flex justify-around gap-8">
              <div className="flex flex-col gap-8">
                <input type="text" name="name" id="" placeholder="Name lengkap" className="px-2 py-1 w-80 rounded-md border border-slate-500" />
                <input type="text" name="tanggalLahir" id="" placeholder="tanggal lahir, co: 28 Oktober 2007 " className="px-2 py-1 w-80 rounded-md border border-slate-500" />
                <input type="text" name="instagram" id="" placeholder="link-Instagram" className="px-2 py-1 w-80 rounded-md border border-slate-500" />
                <input type="text" name="github" id="" placeholder="link-github" className="px-2 py-1 w-80 rounded-md border border-slate-500" />
                <input type="text" name="linkedin" id="" placeholder="link-linkedin" className="px-2 py-1 w-80 rounded-md border border-slate-500" />
              </div>
              <div className="flex flex-col gap-8">
                <input type="text" name="jabatan" id="" placeholder="jabatan" className="px-2 py-1 w-80 rounded-md border border-slate-500" />
                <label htmlFor="foto">
                  <p className="font-semibold">Foto :</p>
                  <input type="file" name="foto" id="foto" placeholder="foto" />
                </label>
                <label htmlFor="cv">
                  <p className="font-semibold">CV :</p>
                  <input type="file" name="cv" id="cv" placeholder="cv" />
                </label>
                <label htmlFor="hobi">
                  <p className="font-semibold">Hobi :</p>
                  <textarea name="hobi" id="hobi" placeholder="beri tanda koma(,) disetiap hobi, tanpa spasi." rows={4} className="px-2 py-1 w-80 rounded-md border border-slate-500"></textarea>
                </label>
              </div>
            </div>
            <div className="flex justify-between items-center mx-12">
              <h5 className="text-sm text-slate-500">Notes: kosongkan jika tidak ada.</h5>
              <button type="submit" className="px-2 py-1 w-20 bg-teal-500 text-white rounded-lg font-medium my-4 ">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardSiswa;
