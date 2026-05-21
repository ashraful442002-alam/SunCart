"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = (e) => {

  e.preventDefault();

  const registeredUser =
    JSON.parse(localStorage.getItem("registeredUser"));

  if (
    registeredUser?.email === email &&
    registeredUser?.password === password
  ) {

    localStorage.setItem(
      "user",
      JSON.stringify(registeredUser)
    );

    toast.success("Login Successful");

    window.location.href = "/";

  } else {

    toast.error("Invalid Email or Password");

  }
};
  return (
    <div className="flex justify-center items-center min-h-screen px-5">

      <form
        onSubmit={handleLogin}
        className="card bg-base-100 shadow-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-5">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered mb-5"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-warning text-white">
          Login
        </button>

        <p className="text-center mt-4">

          Don't have an account?

          <Link
            href="/register"
            className="text-orange-500 ml-2 font-semibold"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
};

export default LoginPage;