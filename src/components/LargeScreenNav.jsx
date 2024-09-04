import React, { useState } from "react";
import { largeScreenServices } from "../data/servicesData.js";
import FlightSW from "./searchWidgets/FlightSW.jsx";
const LargeScreenNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState("flight");

  // used to switch between modes like flight, train, etc
  function handleServiceSelection(service) {
    setSelectedService(service);
  }

  return (
    <div
      className="relative h-max lg:bg-cover lg:bg-center "
      style={{
        backgroundImage: "url('/assets/images/bg-splash-art.jpg')",
      }}
    >
      <div className=" inset-0 absolute bg-gray-700 opacity-50"></div>
      <div className="relative z-10 flex justify-between items-center h-12">
        <div className="w-1/3">
          <h1 className="text-xl text-white font-base lowercase text-center ">
            Make <span className="text-rose-500">your</span> trip
          </h1>
        </div>
        <div className="w-2/3 flex justify-between space-x-4 text-white text-sm">
          <div>List your property</div>
          <div>Introducting MyBiz</div>
          <div>My Trips</div>
          <div>Login</div>
        </div>
      </div>

      <div className="mx-auto w-3/4 flex justiy-evenly items-center p-6 ">
        <div className="relative mx-auto z-10 bg-white h-28 flex w-full justify-between px-6 rounded-xl items-center shadow">
          {largeScreenServices.map((service, index) => (
            <div
              key={index}
              className={`flex w-full rounded-xl  hover:bg-gray-200 flex-col items-center justify-center space-y-2 ${
                selectedService === service.name
                  ? "border-b-4 border-blue-900 rounded-none"
                  : ""
              }`}
              onClick={() => handleServiceSelection(service.name)}
            >
              <span
                className={`text-3xl  transition ease-in delay-50 ${
                  selectedService === service.name
                    ? "text-blue-400"
                    : "text-gray-500"
                }`}
              >
                {service.logo}
              </span>
              <span className="capitalize text-sm">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative z-6 bottom-8">
        <FlightSW />
      </div>
    </div>
  );
};

export default LargeScreenNav;
