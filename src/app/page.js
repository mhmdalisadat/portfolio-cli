"use client";

import { motion } from "framer-motion";
import Loader from "@/components/loader";
import NotFoundModel from "@/components/models3D/404";
import Cube from "@/components/models3D/cube";
import HeroSection from "@/components/hero/components/hero";
import Image from "next/image";
import Dock from "@/components/magicui/dock";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-950 via-pink-950 to-blue-950 "
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="flex-grow">
        <HeroSection />
      </div>

      <div className=" sticky bottom-10 left-0 w-full ">
        <Dock />
      </div>
    </div>
  );
}
