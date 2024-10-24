import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Footer from "../footer";
import Line from "../line";
import { MdPermContactCalendar } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="overflow-x-hidden overflow-y-hidden bg-gradient-to-b ">
        <Line logo={<MdPermContactCalendar />} />
      </div>

      <div className="container px-6 py-12 mx-auto ">
        <div className="p-8 rounded-2xl bg-[#252525] shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
            Contact Me
          </h1>

          <div className="flex items-center justify-center">
            <motion.div
              className="p-4 py-6 rounded-2xl bg-[#333] shadow-inner md:p-8"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-white">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-5 py-2.5 mt-2 text-white bg-[#555] rounded-xl focus:ring-gold focus:outline-none"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-white">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="block w-full px-5 py-2.5 mt-2 text-white bg-[#555] rounded-xl focus:ring-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block mb-2 text-sm text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="block w-full px-5 py-2.5 mt-2 text-white bg-[#555] rounded-xl focus:ring-gold focus:outline-none"
                  />
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-white">
                    Message
                  </label>
                  <textarea className="block w-full px-5 py-2.5 mt-2 text-white bg-[#555] rounded-xl focus:ring-gold focus:outline-none"></textarea>
                </div>

                <motion.button
                  className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-black bg-[#B8860B] hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-white rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send message
                </motion.button>
              </form>
            </motion.div>
          </div>



          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
