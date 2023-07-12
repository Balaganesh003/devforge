import React from 'react';
import Image from 'next/image';

const HeroCard = ({ title, description, textColor, bgColor, image }) => {
  return (
    <div className="w-full h-full max-w-[320px] mx-auto border rounded-[20px] flex flex-col ">
      <div
        className={`${bgColor} rounded-t-[20px] flex justify-center  small-lg:h-[20rem] xl:h-[200px] relative md:h-[13rem] h-[200px]`}>
        <Image
          src={image}
          alt={title}
          className={`small-lg:h-[24rem] md:h-[15rem] px-[1rem] left-1/2  -translate-x-1/2 w-full aspect-auto xl:h-[240px] absolute bottom-0 h-[220px]`}
        />
      </div>
      <div className="p-[24px] md:p-[2rem] small-lg:p-[4rem]  xl:px-[36px]  rounded-b-[20px] border-[#d7d7d7]  ">
        <h2
          className={` font-CabinetGrotesk-Bold leading-[1]  mb-5 small-lg:mb-[24px] xl:text-[32px] small-lg:text-[4.4rem] text-[24px] ${textColor}`}>
          {title}
        </h2>
        <p className="text-[16px] md:text-[12px] font-sans small-lg:text-[2rem] leading-[1.5] xl:text-[18px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
