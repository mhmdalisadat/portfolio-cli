import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Line = ({ logo }) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t-4 border-pink-950 ml-[-1px]"></div>
      <div className="relative w-10 h-10 flex items-center  justify-center bg-pink-950 border border-pink-950 rounded-full z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute inset-0 border-4  border-blue-950 rounded-full"
        ></motion.div>
        <FaStar className="text-yellow-500" />
      </div>
      <div className="flex-grow border-t-4 border-pink-950 mr-[-1px]"></div>
    </div>
  );
};

export default Line;
