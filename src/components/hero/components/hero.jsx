"use client"; // Ensure this component runs on the client

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import HeroImg from "./hero.svg";
import Mahya from "./mahya.svg";
import { useEffect } from "react";
import Line from "@/components/line";

const HeroSection = () => {
  const scrollY = useMotionValue(0);

  const colorBe = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(165, 0, 255)"]
  );

  const colorOn = useTransform(
    scrollY,
    [0, 100],
    ["rgb(255, 255, 255)", "rgb(255, 20, 147)"]
  );

  const colorTime = useTransform(
    scrollY,
    [0, 100],
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
    <>
      <main className="relative h-screen w-full  text-white overflow-hidden rounded-2xl flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-950 via-pink-900 to-blue-950"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
        <div
          dir="rtl"
          className="absolute top-4 right-4 flex flex-col items-end"
        >
          <motion.div
            className="  text-sm md:text-md"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p>MohammadAli Sadat</p>
          </motion.div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="w-64 h-96 md:w-[30rem] md:h-[54rem] overflow-hidden mr-0 md:mr-8 mt-10 md:mt-20"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full">
              <Image src={HeroImg} alt="Person" objectFit="cover" />
              {/* <Image src={Mahya} alt="Person" objectFit="cover" /> */}
            </div>
          </motion.div>

          <div className="text-center md:text-left mt-6 md:mt-0">
            <h1 className="font-bebas-neue uppercase text-2xl sm:text-6xl md:text-7xl font-black leading-none">
              <motion.span style={{ color: colorBe }}>front-</motion.span>
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
              Far from reality: mastering time, staying punctual, and making
              plans happen.
            </motion.p>

            {/* Centering button on mobile devices */}
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
