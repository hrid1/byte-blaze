import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">
      <ScaleLoader size={1000} color="#f92fd3"></ScaleLoader>
    </div>
  );
};

export default Loader;
