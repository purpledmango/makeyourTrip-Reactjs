import React, { useState } from "react";

const Option = ({ label, value, selectedOption, handleOptionChange }) => {
  const isSelected = selectedOption === value;
  return (
    <div
      className={`flex items-center justify-center rounded-3xl px-3 py-2 gap-2 ${
        isSelected ? "bg-blue-200" : "bg-gray-100"
      }`}
    >
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          className="hidden"
          checked={isSelected}
          onChange={() => handleOptionChange(value)}
        />
        <span
          className={`w-4 h-4 inline-block border-2 rounded-full ${
            isSelected ? "bg-blue-500 border-blue-500" : "border-gray-500"
          }`}
        >
          {isSelected && (
            <span className="block w-full h-full text-white text-center leading-none">
              ✓
            </span>
          )}
        </span>
        <span className="capitalize">{label}</span>
      </label>
    </div>
  );
};

const AirportSearchUI = ({ uiName, location, locationSubText }) => {
  return (
    <div className="capitalize flex flex-col items-between gap-4 w-full p-2 hover:bg-blue-200">
      <span className="font-light text-sm ">{uiName}</span>
      <div className="flex-col gap-[16px]">
        <h3 className="text-3xl font-extrabold">{location}</h3>
        <span className=" font-light text-sm">{locationSubText}</span>
      </div>
    </div>
  );
};

const FlightSW = () => {
  const [selectedOption, setSelectedOption] = useState("one-way");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="w-5/6 bg-white mx-auto rounded-xl px-6 py-8">
      {/* Type of flight, round trip/direct */}
      <div className="w-full flex gap-4 items-center justify-between">
        <div className="flex gap-4">
          <Option
            label="One way"
            value="one-way"
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <Option
            label="Round trip"
            value="round-trip"
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <Option
            label="Multi City"
            value="multi-city"
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
        </div>

        <div>
          <p className="text-sm">Book Domestic & International Flights</p>
        </div>
      </div>

      {/* Airport search UI */}
      <div className="flex relative">
        {/* From airport */}
        <div className="rounded-l-lg border-gray-300 border-[2px] flex-1">
          <AirportSearchUI
            uiName="from"
            location="Delhi"
            locationSubText="DEL, Delhi Airport India"
          />
        </div>

        {/* Center black dot */}
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-black  z-10"></div>
          </div>
        </div>

        {/* To airport */}
        <div className="rounded-r-lg border-gray-300 border-[2px] flex-1">
          <AirportSearchUI
            uiName="to"
            location="Mumbai"
            locationSubText="BOM, Mumbai Airport India"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightSW;
