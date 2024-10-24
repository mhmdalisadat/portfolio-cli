import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const TeamBanner = () => {
  const teamMembers = [
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238737.png",
      name: "محیا ابویی",
      position: "Back-end /Project Manager",
      className: "w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto",
    },
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238720.png",
      name: "معین دهقان",
      position: "Business Analyst/DevOps",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto",
    },
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238702.png",
      name: "علی سادات",
      position: "Front-end/Marketing Lead",
      className: "w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto",
    },
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238684.png",
      name: "زهرا امینی",
      position: "Front-end/Lead Designer",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto",
    },
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238644.png",
      name: "نخود",
      position: "نخود",
      className: "w-44 h-56 rounded-2xl object-cover mx-auto",
    },
    {
      imgSrc: "https://pagedone.io/asset/uploads/1696238665.png",
      name: "سمیه کریمزاده",
      position: "front-end/Cyber seucrity",
      className: "w-44 h-56 rounded-2xl object-cover  mx-auto",
    },
  ];
  return (
    <section className="py-24 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full lg:w-full">
          <h2 className="font-manrope text-5xl text-white font-bold leading-[4rem] mb-7 text-center">
            Our leading, strong & creative team
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-row md:mt-20">
          <div className="w-full lg:w-full lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="relative text-center group">
                  <img
                    src={member.imgSrc}
                    alt={`${member.name}'s picture`}
                    className={member.className}
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-40 rounded-2xl transition-all duration-300 ease-in-out group-hover:bg-opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 bg-opacity-60 rounded-b-2xl">
                    <h3 className="text-white font-bold text-lg">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{member.position}</p>
                    <div className="flex justify-center space-x-4 mt-2">
                      <a href="#" className="text-[#DAA520] hover:text-blue-500">
                        <FaTwitter size={20} />
                      </a>
                      <a href="#" className="text-[#DAA520] hover:text-blue-700">
                        <FaLinkedin size={20} />
                      </a>
                      <a href="#" className="text-[#DAA520] hover:text-pink-600">
                        <FaInstagram size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
