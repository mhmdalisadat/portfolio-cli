"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Button from "@/components/button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleCopy = () => {
    navigator.clipboard.writeText("mohammadalisadat.20@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8 },
    }),
  };

  return (
    <>
      <motion.section
        className="container mt-10 mx-auto px-4"
        id="about"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className={
                index === 0
                  ? "col-span-1 xl:row-span-3"
                  : index === 1
                  ? "col-span-1 xl:row-span-3"
                  : index === 2
                  ? "col-span-1 xl:row-span-4"
                  : index === 3
                  ? "xl:col-span-2 xl:row-span-3"
                  : "xl:col-span-1 xl:row-span-2"
              }
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`p-5 rounded-2xl shadow-lg ${
                  index > 0 ? "bg-[#555]" : "bg-[#555]"
                }`}
              >
                {index < 5 && (
                  <motion.img
                    src={`assets/grid${index + 1}.png`}
                    alt={`grid-${index + 1}`}
                    className={`w-full ${
                      index === 4 ? "md:h-[126px] sm:h-[276px]" : "sm:h-[276px]"
                    } h-auto object-contain mb-4`}
                    variants={imageVariants}
                    whileHover="hover"
                  />
                )}
                <div>
                  {index === 0 && (
                    <>
                      <p className="text-2xl text-white font-bold mb-2">
                        Hi, I’m Ali
                      </p>
                      <p className="text-white">
                        With 12 years of experience, I have honed my skills in
                        both frontend and backend dev, creating dynamic and
                        responsive websites.
                      </p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className="text-2xl text-white font-bold mb-2">
                        Tech Stack
                      </p>
                      <p className="text-white">
                        I specialize in a variety of languages, frameworks, and
                        tools that allow me to build robust and scalable
                        applications
                      </p>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className="text-2xl text-white font-bold mb-2">
                        I’m very flexible with time zone communications &
                        locations
                      </p>
                      <p className="text-white">
                        I'm based in Rjieka, Croatia and open to remote work
                        worldwide.
                      </p>
                      <Button
                        name="Contact Me"
                        isBeam
                        containerClass="w-full mt-10"
                      />
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <p className="text-2xl text-white font-bold mb-2">
                        My Passion for Coding
                      </p>
                      <p className="text-white">
                        I love solving problems and building things through
                        code. Programming just my s my
                        passion. I enjoy exploring new technologies, and
                        enhancing my skills.
                      </p>
                    </>
                  )}
                  {index === 4 && (
                    <div className="space-y-2 text-white text-center">
                      <p className="text-white">Contact me</p>
                      <div
                        className="flex items-center justify-center space-x-2 cursor-pointer"
                        onClick={handleCopy}
                      >
                        <motion.img
                          src={
                            hasCopied ? "assets/tick.svg" : "assets/copy.svg"
                          }
                          alt="copy"
                          className="w-6 h-6"
                          initial={{ scale: 1 }}
                          animate={{ scale: hasCopied ? 1.2 : 1 }}
                          transition={{ duration: 0.2 }}
                        />
                        <p className="text-lg font-medium text-white">
                          mohammadalisadat.20@gmail.com
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default About;
