import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  // Logout Handling
  const handleSignOut = () => {
    userLogout()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-gray-100 bg-transparent mt-2 mb-4 rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink to="/" className="text-base">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" className="text-base">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact-us" className="text-base">
              <li>Contact Us</li>
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="text-xl mx-4 text-bold">
          Style Vista
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <NavLink to="/" className="text-base">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about" className="text-base">
            <li>About</li>
          </NavLink>
          <NavLink to="/contact-us" className="text-base">
            <li>Contact Us</li>
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Logout and Login toggle for registered user */}
        {user ? (
          <div className="flex gap-4">
            <div title={user?.displayName}>
              <img
                className="mt-1 w-10 rounded-full"
                referrerPolicy="no-referrer"
                src={user?.photoURL || "/public/user.png"}
              />
            </div>
            <button
              className="btn btn-success rounded-full text-white"
              onClick={handleSignOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-violet-600 rounded-full text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
