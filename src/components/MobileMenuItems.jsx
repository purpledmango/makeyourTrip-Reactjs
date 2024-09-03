import React from 'react'
import { GrFormNext } from "react-icons/gr";

const MobileMenuItems = ({title, Logo, nextBtn}) => {
  return (
    <div className="w-full h-16 flex text-sm justify-start items-center sapce-x-4 px-2 py-4 rounded-2xl border-[2px]  border-gray-200 hover:cursor-pointers hover:cursor-pointer">
              
    <div className="text-2xl w-1/5 flex items-center justify-center">
      {Logo}
      </div>
    
      <span className="capitalize w-3/5">{title}</span>
    

      {nextBtn && <GrFormNext className="text-2xl w-1/5"/>}
  </div>
  )
}

export default MobileMenuItems