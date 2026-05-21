"use client";
import React from 'react';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(userData)
    );

    toast.success("Registration Successful");

    router.push("/login");

  };

  return (
    <div className="flex justify-center items-center min-h-screen px-5">

      <form
        onSubmit={handleRegister}
        className="card bg-base-100 shadow-xl p-8 w-full max-w-md"
      >

        <h1 className="text-3xl font-bold text-center mb-5">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered mb-3"
          onChange={(e) => setName(e.target.value)}
          required
        />

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
          Register
        </button>

        <p className="text-center mt-4">

          Already have an account?

          <Link
            href="/login"
            className="text-orange-500 ml-2 font-semibold"
          >
            Login
          </Link>

        </p>

      </form>

    </div>
  );
};

export default RegisterPage;