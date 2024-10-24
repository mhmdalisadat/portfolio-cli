import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Line = ({ logo }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t-4 border-[#555] ml-[-1px]"></div>
      <div className="relative w-10 h-10 flex items-center  justify-center p-6 bg-[#DAA520] border border-[#DAA520] rounded-full ">
        <div className="text-white text-2xl">{logo}</div>
      </div>
      <div className="flex-grow border-t-4 border-[#555] mr-[-1px]"></div>
    </div>
  );
};

export default Line;
