import React from "react";
import { useRef } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../assets/img/ekoLogo.png";

const Login = () => {
  const signInEmailRef = useRef(null);
  const signInPasswordRef = useRef(null);
  return (
    <div className="bg-[#e1f0fa] min-h-screen flex justify-center items-center">
      <div className="  shadow-2xl py-20 px-14 w-fit mx-auto">
        <div>
          <img
            src={logo}
            alt="eko logo"
            className="w-[100px] mb-[20px] mx-auto"
          />
        </div>
        <h1 className=" font-semibold text-3xl mb-8 text-center">
          EKO INFOMATICS
        </h1>
        <form className="max-w-[250px] mx-auto">
          <input
            ref={signInEmailRef}
            type="text"
            placeholder="Email address"
            required
            className=" w-full outline-none py-2 px-5 mb-5 bg-[#c3d6e2] border-b-2 border-opacity-0 focus:border-opacity-100 border-[#3498db] rounded "
          />
          <input
            ref={signInPasswordRef}
            type="password"
            placeholder="Password"
            required
            className=" w-full outline-none py-2 px-5 mb-5 bg-[#c3d6e2] border-b-2 border-opacity-0 focus:border-opacity-100 border-[#3498db] rounded "
          />
          {/* <p className="my-5 text-sm text-red-500">{loginErrorMessage}</p> */}
          <button
            className="bg-[#09518d] text-white hover:bg-[#3498db] w-full p-2 border-0 hover:border-0 outline-none transition-all rounded-md active:scale-95"
            variant="outlined"
            // onClick={signInHandler}
          >
            Sign in
          </button>
        </form>
        <p className="my-2 text-xl  text-center">or</p>
        <button
          className="  bg-[#09518d] text-white hover:bg-[#3498db] w-full p-2 border-0 hover:border-0 outline-none max-w-[350px] transition-all rounded-md active:scale-95 mx-auto block"
          variant="outlined"
          //   onClick={signInWithGoogle}
        >
          <GoogleIcon />
          <span className="ml-3"> SIGN IN WITH GOOGLE</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
