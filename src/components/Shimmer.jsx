import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-48 w-full bg-gray-200 rounded-lg shadow-lg animate-pulse 
                       bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
