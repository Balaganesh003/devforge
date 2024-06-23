import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import BlackDownArrow from '@/assets/BlackDownArrow.svg';
import AuthBanner from '@/components/AuthBanner';
import Education from '@/components/Education';
import { useRouter } from 'next/router';
import ProfileDetails from '@/components/ProfileDetails';
import SocialDetails from '@/components/SocialDetails';
import Verification from '@/components/Verification';
import Dualring from '@/assets/dualring.svg';
import toast, { Toaster } from 'react-hot-toast';

const SignUpPage = () => {
  const router = useRouter();
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [direction, setDirection] = useState(1);

  const nextPanel = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setTimeout(() => {
      if (index < 3) {
        index === 0 && toast.success('Added Education details successfully');
        index === 1 && toast.success('Added Profile details successfully');
        index === 2 && toast.success('Added Social details successfully');
        setIndex(index + 1);
        setDirection(1);
      }
      setIsLoading(false);
    }, 3000);
  };

  const prevPanel = (e) => {
    e.preventDefault();

    if (index > 0) {
      setIndex(index - 1);
      setDirection(-1);
    }
  };

  const gotoUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      toast.success('Profile Created Successfully!');
      router.push('/user');
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const handelResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handelResize);
    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, []);

  return (
    <div
      className={`flex  h-full w-full ${
        height > 582 ? 'h-screen overflow-hidden' : 'h-full'
      }`}>
      <Toaster />
      <div className="hidden  md:flex  md:w-[39.0625%] bg-[#F5F7F9] px-4 md:py-[2.75rem] sm:p-[1.5rem] lg:p-[2.75rem]    justify-center">
        <div className="max-w-[380px]  w-full flex flex-col  justify-around h-full">
          <AuthBanner />
          <div className="w-full text-[#101724] pt-[2.25rem] ">
            <p className="text-[1.25rem]">
              Step <span>{index + 1}</span>
            </p>
            <h1 className="text-[#101724] font-CabinetGrotesk-Bold  text-[1.5rem] mt-2">
              {index === 0 && 'Add your Education'}
              {index === 1 && 'Complete your profile'}
              {index === 2 && 'Add your socials'}
              {index === 3 && 'Add your socials'}
            </h1>
            <p className="text-[#525863] text-[1rem] leading-[1.75rem] mt-4 tracking-tight ">
              {index === 0 &&
                ' Add your current educational qualification to let us know about your college, degree and graduation year'}
              {index === 1 &&
                ' A catchy one liner about you that grabs attention & your contact details'}
              {index === 2 &&
                ' Add atleast three social handles that help us verify your profile'}
              {index === 3 &&
                ' Add documents that help us verify your profile. This is a one time process and will not be shared with anyone.'}
            </p>
            <div className="flex gap-2 mt-[1.75rem]">
              <div
                className={` bg-[#111727] w-[80px] rounded-full h-[10px]`}></div>
              <div
                className={` ${
                  index >= 1 ? 'bg-[#111727] border-[#111727]' : 'bg-white '
                }  w-[80px] rounded-full h-[10px] `}></div>
              <div
                className={` ${
                  index >= 2 ? 'bg-[#111727]' : 'bg-white '
                }  w-[80px] rounded-full h-[10px]`}></div>
              <div
                className={` ${
                  index >= 3 ? 'bg-[#111727]' : 'bg-white'
                }  w-[80px] rounded-full h-[10px]`}></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:w-[60.9375%] overflow-x-hidden  w-full md:flex flex-col md:flex-row md:justify-center  md:px-[1.5rem] lg:px-[2.25rem]  md:py-[2.5rem]   ${
          height > 582 ? 'min-h-screen overflow-y-auto ' : 'min-h-full'
        }  `}>
        {/* Mobile nav bar */}
        <div className="h-[60px] md:hidden fixed top-0  py-2 px-4 w-full shadow-nav bg-white left-0 z-[50] flex items-center justify-between mb-2 ">
          <div className="flex-1 flex justify-start">
            <Image
              onClick={prevPanel}
              src={BlackDownArrow}
              alt="back"
              className={`h-[1.5rem] w-fit rotate-90 cursor-pointer transition-all duration-300 ${
                index > 0 ? 'block opacity-[100%]' : 'hidden opacity-0'
              }`}
            />
          </div>
          <div className="flex gap-1 flex-1 justify-center ">
            <div
              className={`w-4 h-[3px] rounded-full   ${
                index >= 0 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full  ${
                index >= 1 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full  ${
                index >= 2 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full  ${
                index >= 3 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
          </div>
          <div className="flex-1  flex justify-end">
            <button
              onClick={index == 3 ? gotoUser : nextPanel}
              className="py-[10px] w-fit  px-8 text-[0.875rem] rounded font-semibold bg-[#0082FB]  hover:bg-[#0082FB]/90 hover:-translate-y-0.5 text-white hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              Next
            </button>
          </div>
        </div>
        {/* Slides */}
        <div className="max-w-[650px] w-full md:pt-[2.5rem]  md:my-auto p-[1rem] pt-[6rem] mobile-lg:p-[1.5rem] mobile-lg:pt-[6rem] mx-auto my-auto">
          <AnimatePresence initial={false} custom={index} mode={`wait`}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ease={easeIn}>
              {index === 0 && <Education />}
              {index === 1 && <ProfileDetails />}
              {index === 2 && <SocialDetails />}
              {index === 3 && <Verification />}
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-full  md:flex justify-center">
            <button
              onClick={index == 3 ? gotoUser : nextPanel}
              className="w-[180px] mt-[2.75rem]  mx-auto  bg-[#0082FB] text-white px-4 rounded-[5px] font-medium text-[0.875rem] h-[2.5rem]  justify-center flex items-center  hover:bg-[#0082FB]/90 hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer relative">
              {isLoading ? (
                <Image
                  src={Dualring}
                  alt="dualring"
                  width={24}
                  height={24}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"
                />
              ) : index == 3 ? (
                'Complete Profile'
              ) : (
                'Save and Continue'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
