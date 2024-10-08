"use client"; // Ensure this component runs on the client

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import HeroImg from "./hero.svg";
import { useEffect } from "react";

const HeroSection = () => {
  const scrollY = useMotionValue(0);

  const colorBe = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(165, 0, 255)"]
  );

  const colorOn = useTransform(
    scrollY,
    [100, 200],
    ["rgb(255, 255, 255)", "rgb(255, 20, 147)"]
  );

  const colorTime = useTransform(
    scrollY,
    [200, 300],
    ["rgb(255, 255, 255)", "rgb(30, 144, 255)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <main className="relative h-screen w-full bg-gray-900 text-white overflow-hidden flex items-center justify-center">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="w-64 h-96 md:w-[30rem] md:h-[54rem] overflow-hidden mr-0 md:mr-8 mt-10 md:mt-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-full">
            <Image src={HeroImg} alt="Person" objectFit="cover" />
          </div>
        </motion.div>

        <div className="text-center md:text-left mt-6 md:mt-0">
          <h1 className="font-bebas-neue uppercase text-4xl sm:text-6xl md:text-8xl font-black leading-none">
            <motion.span style={{ color: colorBe }}>front</motion.span>
            <motion.span style={{ color: colorOn }}>end </motion.span>
            <motion.span style={{ color: colorTime }}>dev</motion.span>
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

          <div className="mt-8 flex gap-4">
            <motion.a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-blue-950 border-2 border-transparent text-white text-sm md:text-md shadow-lg"
              whileHover={{ scale: 1.1, rotateY: 10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ perspective: 1000 }}
            >
              Get started
            </motion.a>
            <motion.a
              href="#"
              className="uppercase py-2 px-4 rounded-lg bg-transparent  text-white text-sm md:text-md relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="absolute inset-0 border-pink-500"
                initial={{ top: "0%", left: "0%", width: "0%", height: "2px" }}
                animate={{
                  top: ["0%", "0%", "100%", "100%", "0%"],
                  left: ["0%", "100%", "100%", "0%", "0%"],
                  width: ["0%", "100%", "100%", "0%", "0%"],
                  height: ["2px", "2px", "2px", "2px", "0%"],
                }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                style={{ borderWidth: "2px", borderStyle: "solid" }}
              ></motion.div>
              projects
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      />
    </main>
  );
};

export default HeroSection;
