"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "ashraful442002@gmail.com" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ email }));
      toast.success("Login Successful");
      router.push("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">

      <form onSubmit={handleLogin} className="card p-6 w-96 shadow-xl">

        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="font-medium text-gray-200 pb-3">Email: ashraful442002@gmail.com</p>

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="font-medium text-gray-200 pb-3">Password: admin </p>

        <button className="btn btn-warning text-white">
          Login
        </button>

      </form>

    </div>
  );
};

export default LoginPage;