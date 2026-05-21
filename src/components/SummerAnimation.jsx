"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const SummerAnimation = () => {

  const [animationData, setAnimationData] =
    useState(null);

  useEffect(() => {

    fetch(
      "https://assets2.lottiefiles.com/packages/lf20_u4yrau.json"
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data));

  }, []);

  if (!animationData) {
    return null;
  }

  return (
    <div className="max-w-md mx-auto py-10">

      <Lottie animationData={animationData} />

    </div>
  );
};

export default SummerAnimation;