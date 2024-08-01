import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataSiswa } from '../redux/reducer/siswaSlice';

const DashboardSiswa = () => {
  const navigate = useNavigate();
  const {user} = useSelector(state => state.authSlice);
  const dispatch = useDispatch();
  const {dataSiswa} = useSelector(state => state.siswaSlice);

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user]);

  useEffect(() => {
    dispatch(getDataSiswa());
  },[])

  return (
    <DashboardLayout>
      <h1 className="w-full text-3xl font-semibold p-8">Data-Siswa</h1>
      <button className='px-2 py-1 bg-teal-500 text-white rounded-lg font-medium my-4 mx-8'>Tambah</button>
      <div className="flex justify-center items-center ">
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
                    <span><img src={`/siswaImg/${el.foto}`} alt={i} className="h-10" /></span>
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
    </DashboardLayout>
  )
}

export default DashboardSiswa