/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/auth", {
        username,
        password,
      });
      // handle successful login here
      // assuming the response contains a token and user role
      const { token, role, userID } = response.data;
      // store the token and role in local storage
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);
      localStorage.setItem("userId", userID);
      // redirect the user to the home page or dashboard
      navigate("/");
    } catch (error) {
      // handle error here
      // assuming the error response contains a message
      const errorMessage = error.response.data.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login Form  */}
      <form
        onSubmit={handleSubmit}
        className="login_Form bg-yellow-50 px-1 lg:px-8 py-6 border border-yellow-100 rounded-xl shadow-md"
      >
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-yellow-500 ">
            Login
          </h2>
        </div>

        {/* Display error message */}
        {error && <div className="mb-3 text-red-500">{error}</div>}

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="User Name"
            className="bg-yellow-50 border border-yellow-200 px-2 py-2 w-96 rounded-md outline-none placeholder-yellow-200"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            className="bg-yellow-50 border border-yellow-200 px-2 py-2 w-96 rounded-md outline-none placeholder-yellow-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Login
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Don't Have an account{" "}
            <Link className=" text-yellow-500 font-bold" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </form>
    </div>
  );
};

export default Login;
