import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../authprovider/AuthProvider";
import { Helmet } from "react-helmet";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const { setUser, userLogin, googleLogin } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const navigate = useNavigate()

  const handleShow = () => {
    setShow(!show);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    // User Login Handling
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/')
        toast.success("Login Successful", {
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

//   Google Login Handling
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      setUser(result.user);
      navigate('/')
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
    });
  };

  return (
    <div data-aos="fade-up">
      <Helmet>
        <title>Style Vista | Login</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
          <div className="md:max-w-md w-full px-4 py-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-12">
                <h3 className="text-gray-800 text-3xl font-extrabold">
                  Sign in
                </h3>
              </div>

              <div>
                <label className="text-md text-black block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                    placeholder="Enter email"
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <label className="text-black text-md block mb-2">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("password", { required: true })}
                      type={show ? "text" : "password"}
                      className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                      placeholder="Enter password"
                    />
                    {errors.password && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                    <p onClick={handleShow}>
                    {show ? (
                      <IoEyeOffOutline className="text-2xl" />
                    ) : (
                      <IoEyeOutline className="text-2xl" />
                    )}
                  </p>
                  </div>
                </div>
                </div>
              <p className="text-sm mt-4 text-gray-800">
                New Here? {" "}
                <Link
                  to="/registration"
                  className="text-green-500 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
              <div className="mt-12">
                <button
                  type="submit"
                  className="btn w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <div className="divider">OR</div>
            </form>
            <div className="space-x-6 mt-6">
              <button
                onClick={handleGoogleLogin}
                className="btn border-none outline-none w-full"
              >
                <FcGoogle className="text-4xl"></FcGoogle>
                Login with Google
              </button>
            </div>
          </div>

          <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="w-full h-full object-contain"
              alt="login-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
