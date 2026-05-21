"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MyProfilePage = () => {

  const router = useRouter();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser =
      JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {

      router.push("/login");

    } else {

      setUser(storedUser);

    }

  }, []);

  const handleLogout = () => {

    localStorage.removeItem("user");

    router.push("/login");

  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-5">

      <div className="card bg-base-100 shadow-xl p-8 w-full max-w-md">

        <div className="flex justify-center">

          <img
            src={user.photo}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover"
          />

        </div>

        <h1 className="text-3xl font-bold text-center mt-5">
          {user.name}
        </h1>

        <p className="text-center mt-2">
          {user.email}
        </p>

        <button
          onClick={handleLogout}
          className="btn btn-warning text-white mt-6"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default MyProfilePage;