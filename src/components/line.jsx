import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Line = ({ logo }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t-4 border-pink-900 ml-[-1px]"></div>
      <div className="relative w-10 h-10 flex items-center  justify-center p-6 bg-pink-900 border border-pink-900 rounded-full ">
        <div className="text-white text-2xl">{logo}</div>
      </div>
      <div className="flex-grow border-t-4 border-pink-900 mr-[-1px]"></div>
    </div>
  );
};

export default Line;
