import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {logout} from "../redux/reducer/authSlice"

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutFunc  = () => {
    dispatch(logout());
    localStorage.removeItem('user');

    navigate('/login')
  }

  return {logout: logoutFunc}
}

export default useLogout