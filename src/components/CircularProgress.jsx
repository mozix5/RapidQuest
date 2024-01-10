import React from 'react';

const CircularProgress = ({ progress }) => {
  const radius = 40;
  const stroke_width = 6;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = (1 - progress / 100) * circumference;

  const numericStyle = "text-[#343434] font-nunito";
  const headingText = " text-[#343434] font-bitter";
  const subHeadingText = "text-[1.5rem] text-[#343434] font-bitter lg:text-sm";
  const lightText = "lg:text-xs text-lg font-semibold text-[#adadad]";
  const baseText = "text-[1.4rem] text-[#343434] text-lg lg:text-xs font-bold";
  return (
    <div className='h-28 w-28 flex flex-col justify-center items-center relative'>
      <svg className="translate-x-3 -translate-y-1 max-w-full max-h-full  -rotate-90">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#d5f7ee"
          strokeWidth={stroke_width}
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="#22d6aa"
          strokeWidth={stroke_width + 4} // Adjust for progress stroke width
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className={`absolute translate-x-2 text-2xl ${numericStyle}`}>{progress}<sup>%</sup></div>
    </div>
  );
};

export default CircularProgress;
