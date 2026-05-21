import React from 'react';
import heroImg from '../assets/hero3.png';

const Hero = () => {
  return (
   <div className="relative w-full h-[70vh] overflow-hidden z-0">


     <img
  src={heroImg.src}
  alt="hero"
  className="absolute inset-0 w-full h-full object-cover object-right -z-10"
/>

      
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="absolute inset-0 flex items-center px-5 sm:px-10 md:px-20">

        <div className="text-white max-w-lg text-left">

         <h1 className="mb-5 text-5xl font-bold animate__animated animate__animated animate__fadeInDown">
            Summer Sale <br /> 50% OFF
          </h1>

          <p className="mb-5 text-sm sm:text-base md:text-lg">
            Discover trendy summer essentials for your perfect vacation.
          </p>

          <button className="btn btn-warning text-white animate__animated animate__pulse animate__infinite">
            Shop Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default Hero;