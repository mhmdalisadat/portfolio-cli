import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900 text-white">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* تصویر شخص */}
        <img
          src="/path-to-person-image.png"
          alt="Person"
          className="w-32 h-32 rounded-full border-4 border-white mb-4"
        />
        {/* متن معرفی */}
        <h1 className="text-5xl font-bold">James Xi</h1>
        <p className="text-xl mt-4">Experience Designer | Innovation Leader</p>
        <a
          href="#projects"
          className="mt-8 inline-block bg-blue-500 py-3 px-6 rounded hover:bg-blue-700 transition-all"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
