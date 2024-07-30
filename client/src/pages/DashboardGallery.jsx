import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/DashboardLayout'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashboardGallery = () => {
  const navigate = useNavigate();
  const {user} = useSelector(state => state.authSlice)
  
  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [user]);

  return (
    <DashboardLayout>
      <p>asdsad</p>
    </DashboardLayout>
  )
}

export default DashboardGallery