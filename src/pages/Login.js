import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{background: "linear-gradient(to bottom right, #8A2BE2, #800080)"}}>
      <div className="bg-white shadow-md rounded px-10 pt-10 pb-8">
        <h2 className="text-4xl font-bold text-violet-700 mt-15 mb-10">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full lg:w-96 py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full lg:w-96 py-6 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            <div className="text-center mt-4">
            <button className="w-full  bg-violet-700 hover:bg-violet-800 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Log In
            </button>
          </div>
          </div>
          <div className="flex items-center justify-between">
           
            <a className="block mx-auto  font-bold text-violet-700 text-lg hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className="text-center text-lg mt-0">
          Don't have an account? <a className="text-blue-500 hover:text-blue-800" href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
