import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const handleLogIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/f2960b43-8eda-4fec-aaeb-1af75f3ca990/NG-en-20220815-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/80 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full h-full px-4 py-24">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/80 text-white ">
            <div className="max-w-[320px] mx-auto py-12">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error ? (
                <p className="px-3 py-1 rounded  bg-red-500 mt-5">{error}</p>
              ) : null}
              <form
                onSubmit={handleLogIn}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className=" p-3 my-2 rounded bg-gray-700"
                  type="email"
                  placeholder="E-mail"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className=" p-3 my-2 rounded bg-gray-700"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Login
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-1" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-10">
                  <span className="text-gray-600 mr-3">New to Netflix?</span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
