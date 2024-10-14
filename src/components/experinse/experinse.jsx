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

const projectCount = 5;
const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Description of project one",
    image: "assets/expert.png",
    logo: <FaReact size={30} />,
    technologies: [
      <FaReact size={30} />,
      <FaNodeJs size={30} />,
      <FaDatabase size={30} />,
    ],
    link: "/project-one", // Link to the project
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description of project two",
    image: "assets/expert.png",
    logo: <FaHtml5 size={30} />,
    technologies: [
      <FaHtml5 size={30} />,
      <FaCss3Alt size={30} />,
      <FaJsSquare size={30} />,
    ],
    link: "/project-one", // Link to the project
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three",
    image: "assets/expert.png",
    logo: <FaNodeJs size={30} />,
    technologies: [
      <FaNodeJs size={30} />,
      <FaDatabase size={30} />,
      <FaReact size={30} />,
    ],
    link: "/project-one", // Link to the project
  },
  {
    id: 4,
    title: "Project Four",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "assets/expert.png",
    logo: <FaCss3Alt size={30} />,
    technologies: [
      <FaHtml5 size={30} />,
      <FaCss3Alt size={30} />,
      <FaJsSquare size={30} />,
    ],
    link: "/project-one", // Link to the project
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "assets/expert.png",
    logo: <FaJsSquare size={30} />,
    technologies: [
      <FaReact size={30} />,
      <FaNodeJs size={30} />,
      <FaDatabase size={30} />,
      <IoLogoPython size={30} />,
    ],
    link: "/project-one", // Link to the project
  },
];

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="container mx-auto my-20 p-5 bg-pink-900 rounded-2xl shadow-lg">
      <p className="text-4xl font-bold text-center text-white mb-10">
        selected works
      </p>

      <div className="grid lg:grid-cols-[35%,65%] grid-cols-1 gap-2">
        {/* Left Box */}
        <div className="relative  flex flex-col justify-between p-8 shadow-2xl rounded-2xl bg-blue-950 h-[250px] lg:h-[500px]">
          <AnimatePresence>
            <motion.div
              key={selectedProjectIndex}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="project-info text-white"
            >
              {/* Project Logo */}
              <div className="mb-5">{projects[selectedProjectIndex].logo}</div>

              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {projects[selectedProjectIndex].title}
              </h3>

              <p className="text-gray-300">
                {projects[selectedProjectIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mb-10">
            {projects[selectedProjectIndex].technologies.map((tech, index) => (
              <span key={index} className="text-white ">
                {tech}
              </span>
            ))}
          </div>

          <button
            className="absolute bottom-0 left-0 p-3 rounded-full text-white hover:scale-110 duration-500 transition"
            onClick={() => handleNavigation("previous")}
          >
            <BsArrowLeftSquareFill size={25} className="hover:text-pink-900" />
          </button>

          <button
            className="absolute bottom-0 right-0 p-3 rounded-full text-white hover:scale-110 duration-500 transition"
            onClick={() => handleNavigation("next")}
          >
            <BsArrowRightSquareFill size={25} className="hover:text-pink-900" />
          </button>
        </div>

        {/* Right Box */}
        <motion.div
          key={selectedProjectIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center bg-blue-950 rounded-2xl h-[400px] lg:h-[500px] group"
        >
          {/* Project Image */}
          <img
            src={projects[selectedProjectIndex].image}
            alt={projects[selectedProjectIndex].title}
            className="object-cover w-full h-full rounded-2xl transition duration-500 ease-in-out group-hover:shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
          />

          {/* Hover Effect: Link to the project */}
          <Link legacyBehavior href={projects[selectedProjectIndex].link}>
            <a className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out rounded-2xl">
              Visit {projects[selectedProjectIndex].title}
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
