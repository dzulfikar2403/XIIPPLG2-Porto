import React, { useState } from "react";
import Logo from "../components/element/Logo";
import abstractImg from "../assets/abstract-design.jpg";
import logoClass from "../assets/logoXIIPPLG2New.png";
import InputEl from "../components/element/InputEl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [preData, setPreData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setPreData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkData = await axios.post("http://localhost:3000/users/login", preData);

    if (checkData.data === "success") {
      navigate("/dashboard");
    }else{
      setError(checkData.data);
    }
  };

  return (
    <div className="min-h-screen flex gap-2">
      <div className="w-4/5 px-4">
        <Logo />
        <div className="flex flex-col items-center justify-center py-4 my-10">
          <h1 className="text-xl font-bold">Sign in</h1>
          <p className="text-sm text-slate-500 py-2">Welcome back! please enter yout details</p>
          <hr className="w-2/4 my-2 bg-black" />
          {error === null ? "" : <p className="text-rose-700">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 py-4">
              <InputEl type={"email"} name={"email"} value={preData.email} onChange={handleInput} />
              <InputEl type={"password"} name={"password"} value={preData.password} onChange={handleInput} />
            </div>
            <div className="flex justify-center">
              <button type="submit" className="w-3/4 text-sm bg-orange-950 text-white rounded-full p-2 my-4">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full">
        <div className="relative top-[50%] -translate-y-[50%]">
          <div className="absolute bottom-0 w-full">
            <div className="w-[30rem] text-center mx-auto">
              <img src={logoClass} alt={logoClass} className="rounded-full mx-auto w-60 h-60 my-8" />
              <h1 className="text-2xl font-semibold ">
                Discovering <br /> about the class
              </h1>
              <p className="text-sm py-2">Our practice actively checks complete environment configurations to ensure our application seamlessly supports student data portfolios.</p>
            </div>
          </div>
          <img src={abstractImg} alt={abstractImg} className="w-full h-[30rem] rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
