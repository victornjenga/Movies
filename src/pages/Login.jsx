import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();
  const message = "Wrong Password";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log("wrong pass");
      setError(error.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-black">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/ffd3a3f8-fbe2-4a76-ad9a-9e11fdbaf8c8/KE-en-20220530-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt={Image}
        />
        <div className="absolute w-full px-4 py-24 ">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign in</h1>
              {error ? <p className="bg-red-400 p-3 my-2">{error}</p> : null}
              <form
                onClick={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3 my-2 text-xl font-semibold text-center bg-gray-700 rounded-lg"
                  type="email"
                  placeholder="Enter your Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3 my-2 text-xl font-semibold text-center bg-gray-700 rounded-lg"
                  type="password"
                  placeholder="Enter your Password"
                />
                <button className="bg-red-600 py-3 my-6 font-bold px-5 rounded-lg">
                  Sign In
                </button>
                <div className="justify-between items-center text-sm text-gray-500">
                  <div className="flex justify-between items-center">
                    <p>
                      <input type="checkbox" /> Remember Me
                    </p>
                    <p>Need Help</p>
                  </div>

                  <p className="py-4 text-gray-400 ">
                    Don't have an Account{" "}
                    <span className="text-gray-200 font-bold">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
