import React from "react";
import { FloatingDock } from "../hero/components/ui/floatingDock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { RiProjectorFill } from "react-icons/ri";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";
const Dock = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "Instagram",
      icon: <RiInstagramFill className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "LinkedIn",
      icon: <PiLinkedinLogoFill className="h-full w-full text-white" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "#",
    },
    {
      title: "Projects",
      icon: <RiProjectorFill className="h-full w-full text-white" />,
      href: "#",
    },
  ];
  return (
    <div className="flex  items-center justify-center">
      <FloatingDock items={links} />
    </div>
  );
};

export default Dock;
