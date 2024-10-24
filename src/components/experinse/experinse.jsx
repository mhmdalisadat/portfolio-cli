import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: " کافه ی زهرمار",
    description:
      "Description of project one بلیعبلانتیدلبر بللابعلتنبلربل بلنایبرلانتدبل یلتیابلنتقدل قبیتلتیبملئ یقلبرتتاقیللب",
    image: "assets/expert.png",
    logo: <FaReact size={30} />,
    technologies: [
      <FaReact size={30} />,
      <FaNodeJs size={30} />,
      <FaDatabase size={30} />,
    ],
    link: "/project-one",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three",
    image: "assets/terminal.png",
    logo: <FaNodeJs size={30} />,
    technologies: [
      <FaNodeJs size={30} />,
      <FaDatabase size={30} />,
      <FaReact size={30} />,
    ],
    link: "/project-three",
  },
];

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="container mx-auto my-20 p-5 bg-gray-800 rounded-2xl shadow-lg">
      <p className="text-4xl font-bold text-center text-white mb-10">
        Selected Works
      </p>

      <div className="grid lg:grid-cols-[65%,35%] grid-cols-1 gap-2">
        <motion.div
          key={selectedProjectIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center bg-blue-950 rounded-2xl h-[400px] lg:h-[500px] group"
        >
          <img
            src={projects[selectedProjectIndex].image}
            alt={projects[selectedProjectIndex].title}
            className="object-cover w-full h-full rounded-2xl transition duration-500 ease-in-out group-hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
          />

          <Link href={projects[selectedProjectIndex].link} legacyBehavior>
            <a className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl">
              Visit {projects[selectedProjectIndex].title}
            </a>
          </Link>
        </motion.div>
        <div
          dir="rtl"
          className="relative flex flex-col justify-between p-8 shadow-2xl rounded-2xl bg-[#daa520a8] h-[250px] lg:h-[500px]"
        >
          <AnimatePresence>
            <motion.div
              key={selectedProjectIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="project-info text-white"
            >
              <div className="mb-5 text-black">
                {projects[selectedProjectIndex].logo}
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                {projects[selectedProjectIndex].title}
              </h3>
              <p className=" text-black">
                {projects[selectedProjectIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mb-10">
            {projects[selectedProjectIndex].technologies.map((tech, index) => (
              <span key={index} className="text-black">
                {tech}
              </span>
            ))}
          </div>

          <button
            className="absolute bottom-0 left-0 p-3 rounded-full text-black hover:scale-110 transition duration-500"
            onClick={() => handleNavigation("previous")}
          >
            <BsArrowLeftSquareFill size={25} className="hover:text-white" />
          </button>

          <button
            className="absolute bottom-0 right-0 p-3 rounded-full text-black hover:scale-110 transition duration-500"
            onClick={() => handleNavigation("next")}
          >
            <BsArrowRightSquareFill size={25} className="hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
