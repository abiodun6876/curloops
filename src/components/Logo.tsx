import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-8">
        <div className="absolute w-4 h-4 bg-primary-400 rounded-full left-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="text-white text-sm font-bold">C</span>
        </div>
        <div className="absolute w-4 h-4 bg-white rounded-full right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
          <span className="text-primary-400 text-sm font-bold">I</span>
        </div>
        <div className="absolute inset-0 border-4 border-primary-400 rounded-full transform rotate-45"></div>
        <div className="absolute inset-0 border-4 border-white rounded-full transform -rotate-45"></div>
      </div>
      <div className="ml-3">
        <span className="text-white font-poppins font-bold text-xl sm:text-2xl">
          Curloops
        </span>
        <span className="text-primary-400 font-poppins font-bold text-xl sm:text-2xl ml-1">
          Innovations
        </span>
      </div>
    </div>
  );
};

export default Logo;