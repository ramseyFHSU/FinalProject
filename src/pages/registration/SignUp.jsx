import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  // navigate
  const navigate = useNavigate();

  // User Signup State
  const [userSignup, setUserSignup] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  /**========================================================================
   *                          User Signup Function
   *========================================================================**/

  const userSignupFunction = async () => {
    // validation
    if (
      userSignup.username === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    setLoading(true);
    try {
      // create user object
      const user = {
        username: userSignup.username,
        email: userSignup.email,
        password: userSignup.password, // Make sure to hash the password before saving
        role: userSignup.role,
        time: Date.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Send a POST request to your back-end server
      const response = await fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response.body);

      if (!response.ok) {
        throw new Error("Response is not OK");
      }

      const data = await response.json();

      setUserSignup({
        username: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login Form  */}
      <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500 ">
            Signup
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full username"
            value={userSignup.username} // Add this line
            onChange={(e) =>
              setUserSignup({ ...userSignup, username: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email} // Add this line
            onChange={(e) =>
              setUserSignup({ ...userSignup, email: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userSignup.password} // Add this line
            onChange={(e) =>
              setUserSignup({ ...userSignup, password: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Signup Button  */}
        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={userSignupFunction} // Add this line
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className=" text-pink-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
