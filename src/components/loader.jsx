import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
        <span className="sr-only">Loading...</span>
        <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[32px] border-l-transparent border-r-transparent border-b-black animate-bounce [animation-delay:-0.3s] "></div>
        <div className="h-8 w-8 bg-black rounded-full  animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black animate-bounce"></div>
      </div>
    </>
  );
  s;
};

export default Loader;
