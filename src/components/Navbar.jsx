"use client";

import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser =
      JSON.parse(localStorage.getItem("user"));

    setUser(storedUser);

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/login";

  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">

      {/* navbar start */}
      <div className="navbar-start">

        {/* mobile dropdown */}
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >

            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>

            {
              user && (
                <li>
                  <Link href="/my-profile">
                    My Profile
                  </Link>
                </li>
              )
            }

          </ul>

        </div>

        {/* logo */}
        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-2 text-orange-500"
        >

          <FaShoppingBag />

          SunCart

        </Link>

      </div>

      {/* desktop menu */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 font-medium">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          {
            user && (
              <li>
                <Link href="/myprofile">
                  My Profile
                </Link>
              </li>
            )
          }

        </ul>

      </div>

      {/* navbar end */}
      <div className="navbar-end gap-2">

        {
          user ? (
            <>

              

              <button
                onClick={handleLogout}
                className="btn btn-warning text-white"
              >
                Logout
              </button>

            </>
          ) : (
            <>

              <Link
                href="/login"
                className="btn btn-outline btn-warning"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-warning text-white"
              >
                Register
              </Link>

            </>
          )
        }

      </div>

    </div>
  );
};

export default Navbar;