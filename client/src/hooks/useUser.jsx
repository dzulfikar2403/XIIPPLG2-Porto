
import { useDispatch } from "react-redux";
import { login } from "../redux/reducer/authSlice";

const useUser = () => {
  const dispatch = useDispatch();
  const getFunc = () => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(login(JSON.parse(user)));
    }
  };

  return { getFunc };
};

export default useUser