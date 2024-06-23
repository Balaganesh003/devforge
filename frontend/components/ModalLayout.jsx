import React from 'react';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';

const ModalLayout = ({ handelClose, isModalOpen, children }) => {
  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform mobile-lg:p-[3rem] sm:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <Toaster />
      <div
        className={`block mobile-lg:rounded-lg min-h-screen mobile-lg:min-h-fit bg-white mobile-lg:max-w-[64rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block mobile-lg:rounded-lg  bg-primary mobile-lg:max-w-[64rem] w-full  max-h-screen overflow-y-auto relative min-h-[5rem] px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 py-8">
          {/* CloseLogo */}
          <div
            onClick={() => handelClose()}
            className="p-[9px] bg-black/[15%] rounded-full absolute  top-[24px]  right-[24px] cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
            <Image
              src={CrossLogoWhite}
              alt="Cross Logo"
              className={` w-[14px] h-[14px]`}
            />
          </div>
          {/* content */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
