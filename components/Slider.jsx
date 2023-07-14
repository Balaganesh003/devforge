import React from 'react';
import Usa from '@/assets/users/usa.svg';
import Image from 'next/image';
import Link from 'next/link';

const SliderData = [
  'CANADA',
  'EUROPE',
  'AUSTRALIA',
  'SOUTH AMERICA',
  'ASIA',
  'AFRICA',
];

const CommunityClone = () => {
  return (
    <div className=" overflow-hidden my-[6rem] relative px-4 mobile-xl:px-6 md:px-8  w-full max-w-[1280px] mx-auto">
      {/* Swipper */}

      <div className="grid text-[#deb556] grid-cols-1 sm:grid-cols-2 gap-[2rem] lg:gap-[48px] max-w-[1280px]">
        {/* Left */}

        <div className=" bg-[#F4F8FF] py-[4rem] px-[1.5rem]  lg:p-[4rem] rounded-[20px] flex flex-col items-center justify-center">
          <div className=" font-CabinetGrotesk-Bold text-[2.25rem] lg:text-[3rem] break-words  leading-[1.1] flex flex-col">
            <span className="text-[#242C43] leading-[1.5]">We are live in</span>
            <span className="text-[#426DCE] leading-[1.5]">United States!</span>
          </div>
          <div className="flex justify-center">
            <Image
              src={Usa}
              alt="swipper"
              className="w-[100%] sm:w-[75%] lg:w-[100%]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFF9F9] p-[2rem] lg:p-[4rem] rounded-[20px]">
          <div className="border-2 px-[1.5rem] py-[0.75rem] sm:px-[1rem] sm:py-[0.5rem] md:px-[1.25rem] md:py-[0.85rem] lg:px-[1.5rem] mb-6 lg:py-[1rem] uppercase  border-[#8529CD]  rounded-full ">
            <span className="font-CabinetGrotesk-Bold text-[1.25rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem]  leading-[1] text-[#8529CD]">
              Coming in 2023
            </span>
          </div>
          <div className="w-fit h-fit relative overflow-visible  ">
            <div className=" relative flex flex-col items-center gap-[1rem] lg:gap-[1.5rem]">
              {SliderData.map((item, index) => (
                <div
                  key={index}
                  className="text-[2.25rem] sm:text-[2rem] md:text-[2.25rem] lg:text-[3rem]  font-HelveticaNeueLTStd-Lt uppercase w-fit leading-[1.1] whitespace-nowrap  text-[#481C3E]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link
            href={'/user'}
            className="text-[1.5rem] lg:text-[2rem] mt-6 text-[#456FCE] z-10 font-CabinetGrotesk-Bold ">
            Get early access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityClone;
