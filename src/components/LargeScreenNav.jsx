import React, { useState } from "react";
import { largeScreenServices } from "../data/servicesData";
const LargeScreenNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div
      className="relative h-full lg:bg-cover lg:bg-center "
      style={{
        backgroundImage: "url('/assets/images/bg-splash-art.jpg')",
      }}
    >
      <div className=" inset-0 absolute bg-gray-700 opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-lg text-white font-base lowercase text-center ">
          Make <span className="text-rose-500">your</span> trip s
        </h1>
      </div>
    </div>
  );
};

export default LargeScreenNav;
