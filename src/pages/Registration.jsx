/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { AuthContext } from "../authprovider/AuthProvider";
import { Helmet } from "react-helmet";

const Registration = () => {
  const { createUser, setUser, googleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);

//   Password Toggle Handle
  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   Form and User Control
  const onSubmit = (data) => {
    const { fullName, email, photo, password } = data;

    if (password.length < 8) {
      toast.error("Password should greater then 6", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) {
      toast.error("Assign Upper, lower, special character and number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    // Handling User Creation
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Registration Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid Credentials", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    });    
};

  return (
    <div data-aos="zoom-in" className="bg-white md:h-screen">
      <Helmet>
        <title>Style Vista | Registration</title>
      </Helmet>
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-2 h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center p-6 h-full w-full">
          {/* form */}
          <div className="max-w-lg w-full mx-auto">
            <div className="mb-6">
              <h3 className="text-violet-600 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Sign Up
              </h3>
            </div>
            {/* Form Tag Needed */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="text-black text-sm block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                  {...register("fullName")}
                />
              </div>
              <div className="mt-4">
                <label className="text-black text-sm block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="mt-4 mb-6">
                <label className="text-black text-sm block mb-2">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    {...register("password", { required: true })}
                    type={show ? "text" : "password"}
                    required
                    className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                    placeholder="Enter password"
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                  {/* Password Toggle  */}
                  <p onClick={handleShow}>
                    {show ? (
                      <IoEyeOffOutline className="text-2xl" />
                    ) : (
                      <IoEyeOutline className="text-2xl" />
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-4 mb-6">
              <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>
              <select
                className="select select-bordered max-w-full"
                {...register("role", { required: true })}
              >
                <option value="buyer">buyer</option>
                <option value="seller">seller</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-sm font-light">
                  You must select a role
                </p>
              )}
            </div>
              </div>
              <button
                type="submit"
                className="btn w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-violet-600 hover:bg-violet-800 text-white focus:outline-none"
              >
                Sign In
              </button>
            </form>
            <div className="mt-8">
              <p className="text-sm mb-6 text-gray-800">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-violet-600 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
