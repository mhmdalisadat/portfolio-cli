"use client";

import Loader from "@/components/loader";
import NotFoundModel from "@/components/models3D/404";
import Cube from "@/components/models3D/cube";
import HeroSection from "@/components/hero/components/hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Dock from "@/components/magicui/dock";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <Loader />
      <Dock className="fixed bottom-0 left-0 w-full" />
    </div>
  );
}
