"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import Line from "../line";
import { PiCertificateFill } from "react-icons/pi";

const cards = [
  { id: 1, title: "Beautiful Landscape", image: "/assets/jsm-logo.png" },
  { id: 2, title: "Mountain View", image: "/assets/project-logo1.png" },
  { id: 3, title: "Serene Lake", image: "/assets/jsm-logo.png" },
  { id: 4, title: "Sunset Horizon", image: "/assets/jsm-logo.png" },
  { id: 5, title: "Forest Path", image: "/assets/jsm-logo.png" },
];

export default function Slider() {
  const containerRef = useRef(null);
  const xOffset = useRef(0);

  useAnimationFrame((t, delta) => {
    if (containerRef.current) {
      xOffset.current += delta * 0.05;
      containerRef.current.style.transform = `translateX(${-xOffset.current}px)`;

      if (xOffset.current >= containerRef.current.scrollWidth / 2) {
        xOffset.current -= containerRef.current.scrollWidth / 2;
      }
    }
  });

  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden">
        <Line logo={<PiCertificateFill />} />
      </div>
      <h1 className="mt-6 text-3xl md:text-5xl font-bold text-white dark:text-white mb-8 text-center overflow-x-hidden">
        certificates
      </h1>
      <div className="flex items-center justify-center mx-auto overflow-x-hidden p-8  ">
        <div ref={containerRef} className="flex space-x-4">
          {[...cards, ...cards, ...cards].map((card, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] h-[300px] bg-pink-900 text-black flex flex-col items-center justify-start rounded-xl shadow-md overflow-hidden"
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-2/3 object-cover rounded-xl shadow-xl"
              />
              <div className="p-4">
                <h3 className="text-lg text-white font-semibold text-center">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
