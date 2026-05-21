"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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

  }, [router]);

  const handleLogout = () => {

    localStorage.removeItem("user");

    window.location.href = "/";

  };

  if (!user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-5">

      <div className="card bg-base-100 shadow-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          My Profile
        </h1>

        <div className="space-y-4">

          <div>
            <p className="font-semibold">
              Name:
            </p>

            <p>{user.name}</p>
          </div>

          <div>
            <p className="font-semibold">
              Email:
            </p>

            <p>{user.email}</p>
          </div>

          <div>
            <p className="font-semibold">
              Password:
            </p>

            <p>{user.password}</p>
          </div>

        </div>

        

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