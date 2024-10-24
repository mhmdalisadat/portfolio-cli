"use client"; 

import { motion } from "framer-motion";
import Image from "next/image";
import LogoRound from "./02_no_bg.png";

const HeroSection = () => {
  return (
    <>
      <main className="relative h-screen w-full text-white overflow-hidden rounded-2xl flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-black"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 w-[200%] h-1/4 bg-gradient-to-r from-[#DAA520] to-[#FFD700] opacity-30"
            style={{ rotate: i % 2 === 0 ? "45deg" : "-45deg" }}
            animate={{
              x: [
                i % 2 === 0 ? "-100%" : "100%",
                i % 2 === 0 ? "100%" : "-100%",
              ],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
        <div className="absolute top-3 mt-2 left-4 flex flex-col items-start">
          <motion.div
            className="text-sm sm:text-base md:text-lg  text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p>+123 456 7890</p>
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg text-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <p>contact@roundstudio.com</p>
          </motion.div>
        </div>

        {/* Logo */}
        <div className="absolute top-4 right-4 flex items-center">
          <motion.div
            className="w-20 h-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image src={LogoRound} alt="Round Studio Logo" objectFit="cover" />
          </motion.div>
        </div>

        {/* Main content */}
        <div className="relative flex flex-col items-center text-center">
          <h1 className="font-bebas-neue uppercase text-2xl sm:text-6xl md:text-7xl font-black leading-none">
            <motion.span>Round </motion.span>
            <motion.span>Studio </motion.span>
          </h1>

          <motion.p
            className="mt-4 text-base sm:text-lg md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Far from reality: mastering time, staying punctual, and making plans
            happen.
          </motion.p>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
