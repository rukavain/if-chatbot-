import React from "react";

const Skeleton = () => {
  return (
    <div
      className="w-full flex flex-col justify-start items-start 
    "
    >
      <div className="flex flex-col gap-2 shadow-md rounded-xl w-full bg-gray-300 p-4 justify-start items-start animate-pulse">
        <div className="w-full h-48  bg-gray-200 animate-pulse rounded-2xl "></div>
        <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full "></div>
        <div className="w-full h-6 bg-gray-200 animate-pulse rounded-full "></div>
      </div>
    </div>
  );
};

export default Skeleton;
