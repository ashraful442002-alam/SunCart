"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser =
      JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }

  }, []);

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">

      {/* left */}
      <div className="navbar-start">

        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-2 text-orange-500"
        >
          <FaShoppingBag />
          SunCart
        </Link>

      </div>

      {/* center */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal px-1 text-[16px] font-medium">

          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/products">Products</Link>
          </li>

          <li>
            <Link href="/myprofile">My Profile</Link>
          </li>

        </ul>

      </div>

      {/* right */}
      <div className="navbar-end gap-2">

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

      </div>

    </div>
  );
};

export default Navbar;