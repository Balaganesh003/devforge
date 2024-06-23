import React from 'react';
import Image from 'next/image';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import Education from './Education';

const EducationModal = ({ setIsModalOpen, isModalOpen, label }) => {
  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform  mobile-lg:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <div
        className={`block mobile-lg:rounded-lg min-h-screen mobile-lg:min-h-fit bg-primary mobile-lg:max-w-[45rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block mobile-lg:rounded-lg  bg-primary mobile-lg:max-w-[45rem] w-full  max-h-screen overflow-y-auto relative">
          <div className="h-full w-full bg-white sticky top-0 border border-[#d7d7d7] p-[0.9375rem]  rounded-t-md z-[10]">
            {/* CloseLogo */}
            <div className="flex justify-between gap-5 items-center">
              <div
                onClick={() => setIsModalOpen(false)}
                className="p-[9px] bg-black/[15%] w-fit rounded-full  cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
                <Image
                  src={CrossLogoWhite}
                  alt="Cross Logo"
                  className={` w-[14px] h-[14px]`}
                />
              </div>
              <div className="flex gap-4 items-center">
                <div
                  onClick={() => setIsModalOpen(false)}
                  className="flex gap-1 w-[96px] items-center pl-[14px] pr-[16px] max-h-[3rem] h-[2.5rem] border border-black rounded hover:-translate-y-0.5   hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer justify-center ">
                  <p className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
                    Delete
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className=" w-[96px]  bg-[#3365E6] hover:bg-[#3365E6]/90 px-8 rounded font-medium text-[0.875rem] h-[2.5rem] text-white hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ">
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>
          <div className="h-full w-full px-[0.9375rem] overflow-hidden">
            <div className="w-full md:px-3  h-full pb-6 ">
              <h1 className="text-[18px] my-[18px] text-[#666] text-center font-sans font-semibold">
                {label}
              </h1>

              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
