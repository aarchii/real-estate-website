import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen" style={{background: "linear-gradient(to bottom right, #8A2BE2, #800080)"}}>
      <div className="bg-white shadow-md rounded px-10 pt-10 pb-8">
        <h2 className="text-4xl font-bold text-violet-700 mt-15 mb-10">Sign Up</h2>
        <form>
          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="Enter your first name"
              />
            </div>
            <div className="ml-2 w-1/2">
              <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="mr-2 leading-tight"
              id="termsCheckbox"
              type="checkbox"
            />
            <label className="text-gray-700 text-lg" htmlFor="termsCheckbox">
              I accept the terms of use and privacy policy
            </label>
          </div>
          <div className="text-center mb-6">
            <button className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-lg">
          Already have an account? <a className="text-blue-500 hover:text-blue-800" href="#">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
