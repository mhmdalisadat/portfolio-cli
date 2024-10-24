"use client";
import { motion } from "framer-motion";
import Loader from "@/components/loader";
import HeroSection from "@/components/hero/components/hero";
import Image from "next/image";
import Dock from "@/components/magicui/dock";
import Slider from "@/components/certifacates/certificate";
import LineWithCircleIcon from "@/components/line";
import About from "@/modules/about/about";
import Footer from "@/components/footer";
import Contact from "@/components/contact/contact";
import Projects from "@/components/experinse/experinse";
import TeamBanner from "@/components/teamSec/teamBanner";
import PartnerShip from "@/components/partnerShips";

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen flex flex-col ">
      <div className="flex-grow flex justify-center items-center">
        <div className="mt-8 rounded-2xl max-w-9xl w-full mx-4 shadow-xl">
          <HeroSection />
        </div>
      </div>
      <div className="bg-black">
        <TeamBanner />
      </div>
      <div className="mt-10">
        <Projects />
      </div>
      <div>
        <PartnerShip />
      </div>
      <div className="bg-black">
        <About />
      </div>

      <div className="mt-10">
        <Contact />
      </div>

      <div className="sticky bottom-10 left-0 w-full">
        <Dock />
      </div>
    </div>
  );
}
