import React from "react";
import heroImg from "../assets/hero3.png";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      <img
        src={heroImg.src}
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 flex h-full items-center px-10 md:px-20">

        <div className="max-w-2xl text-white text-left">

          <h1 className="mb-5 text-5xl md:text-6xl font-bold leading-tight">
            Summer Sale <br /> 50% OFF
          </h1>

          <p className="mb-6 text-lg">
            Discover trendy summer essentials for your perfect vacation.
          </p>

          <button className="btn btn-warning text-white">
            Shop Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default Hero;