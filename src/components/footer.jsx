import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("09140707704");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <footer className="bg-transparent text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left mb-4 md:mb-0"
        >
          <div className="text-xl mt-2">
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer"
              onClick={handleCopy}
            >
              <motion.img
                src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                alt="copy"
                className="w-6 h-6"
                initial={{ scale: 1 }}
                animate={{ scale: hasCopied ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <p className="text-lg font-medium text-white">
                tel : 09140707704
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex space-x-6 text-right"
        >
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition duration-300 ease-in-out"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
