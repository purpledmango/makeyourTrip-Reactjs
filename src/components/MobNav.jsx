import MobileMenuItems from "./MobileMenuItems";

//Icons
import { HiMenuAlt2 } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoLanguageOutline, IoClose } from "react-icons/io5";
import { BiSolidGift, BiTrip } from "react-icons/bi";
import { GrFormNext } from "react-icons/gr";

// Menu Icons
import { BsSuitcaseLg } from "react-icons/bs";
import { TbRosetteDiscount } from "react-icons/tb";
import { GiIndiaGate } from "react-icons/gi";



import { useState } from "react";

const MobNav = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const handleMenuButton = (e) => {
    e.preventDefault();
    setMobMenu((prev) => !prev);
  };

  

  return (
    <div className="w-full relative">
      <div className="flex justify-between items-center px-2 py-4 gap-2">
        <div className="flex items-center gap-1">
          <HiMenuAlt2
            className="text-2xl hover:cursor-pointer"
            onClick={handleMenuButton}
          />
          <h1 className="text-xs font-base lowercase">
            Make <span className="text-rose-500">your</span> trip
          </h1>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <IoLanguageOutline />
          <select className="border border-gray-300 rounded-lg p-2 bg-white text-gray-800 uppercase w-16 text-center appearance-none">
            <option>eng</option>
            <option>हिन्दी</option>
          </select>
          <FaRegUserCircle className="text-xl" />
          <span>Login Now</span>
        </div>
      </div>

      {mobMenu && (
        <div className="absolute inset-0 bg-white w-4/6 h-screen transition-all duration-600 ease-in-out drop-shadow-2xl">
          
          <div className="py-4 pl-3 text-blue-800">
            <IoClose className="text-3xl hover:cursor-pointer" onClick={handleMenuButton}/>
          </div>

          <div className="px-4 flex flex-col w-full items-center justify-evenly gap-6">

            {/* Branding and Login Button */}

            <div className="w-full flex text-sm justify-center items-center sapce-x-4 px-2 py-4 rounded-2xl bg-green-100 hover:cursor-pointers">
              <BiTrip className="text-5xl w-1/5 text-green-600"/>
              
              <div className="flex w-3/5 flex flex-col gap-2"> 
                <span className="capitalize font-bold text-green-500">login/sign-up now</span>
                <p className="">Login for best deals & offers</p>
              </div>

              <GrFormNext className="text-2xl w-1/5 text-green-500"/>
            </div>
            
            {/* End branding and Login Button */}
            <MobileMenuItems title="view/manage trips" Logo={<BsSuitcaseLg/>} nextBtn={false}/>
            <MobileMenuItems title="giftcards" Logo={<BiSolidGift/>} nextBtn={false}/>
            <MobileMenuItems title="language" Logo={<IoLanguageOutline/>} nextBtn={true}/>
            <MobileMenuItems title="country" Logo={<GiIndiaGate/>} nextBtn={true}/>
            <MobileMenuItems title="offers" Logo={<TbRosetteDiscount/>} nextBtn={true}/>



          

          </div>

        </div>
      )}
    </div>
  );
};

export default MobNav;
