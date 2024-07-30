import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const DashboardSiswa = () => {
  const navigate = useNavigate();
  const {user} = useSelector(state => state.authSlice);

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user]);

  return (
    <DashboardLayout>
      <p>asldsa</p>
    </DashboardLayout>
  )
}

export default DashboardSiswa