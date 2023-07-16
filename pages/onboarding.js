import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import BlackDownArrow from '@/assets/BlackDownArrow.svg';
import AuthBanner from '@/components/AuthBanner';
import Education from '@/components/Education';
import { useRouter } from 'next/router';

const SignUpPage = () => {
  const router = useRouter();
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(0);

  const [direction, setDirection] = useState(1);

  const nextPanel = (e) => {
    e.preventDefault();

    if (index < 3) {
      setIndex(index + 1);
      setDirection(1);
    }
  };

  const prevPanel = (e) => {
    e.preventDefault();

    if (index > 0) {
      setIndex(index - 1);
      setDirection(-1);
    }
  };

  const gotoUser = (e) => {
    router.push('/user');
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
      <div className="hidden  md:flex  md:w-[39.0625%] bg-[#F5F7F9] px-4 md:py-[2.75rem] sm:p-[1.5rem] lg:p-[2.75rem]   justify-center">
        <div className="max-w-[380px]  w-full flex flex-col  justify-around h-full">
          <AuthBanner />
          <div className="w-full text-[#101724] pt-[2.25rem] ">
            <p className="text-[1.25rem]">
              Step <span>{index + 1}</span>
            </p>
            <h1 className="text-[#101724] font-bold text-[1.5rem] mt-2">
              Add your Education
            </h1>
            <p className="text-[#525863] text-[1rem] leading-[1.75rem] mt-4 tracking-tight ">
              Add your current educational qualification to let us know about
              your college, degree and graduation year
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
        className={`md:w-[60.9375%] overflow-x-hidden  w-full flex flex-col md:flex-row md:justify-center  md:px-[1.5rem] lg:px-[2.25rem]  md:py-[2.25rem]   ${
          height > 582 ? 'min-h-screen overflow-y-auto ' : 'min-h-full'
        }  `}>
        {/* Mobile nav bar */}
        <div className="h-[60px] md:hidden  py-2 px-4 w-full shadow-nav bg-white  sticky top-0 left-0 z-[50] flex items-center justify-between mb-2 ">
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
          <div className="flex gap-1 flex-1 justify-center">
            <div
              className={`w-4 h-[3px] rounded-full  ${
                index >= 0 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full  ${
                index >= 1 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full ${
                index >= 2 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
            <div
              className={`w-4 h-[3px] rounded-full ${
                index >= 3 ? 'bg-[#111727]' : 'bg-[#d7d7d7]'
              } `}></div>
          </div>
          <div className="flex-1  flex justify-end">
            <button
              onClick={nextPanel}
              className="py-[10px] w-fit  px-8 text-[0.875rem] rounded font-semibold bg-[#0082FB]  hover:bg-[#0082FB]/90 hover:-translate-y-0.5 text-white hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              Next
            </button>
          </div>
        </div>
        {/* Slides */}
        <div className="max-w-[650px] p-[1rem] mobile-lg:p-[1.5rem] md:p-0 mx-auto my-auto">
          <AnimatePresence initial={false} custom={index} mode={`wait`}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 300 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              ease={easeIn}>
              {index === 0 && <Education />}
              {index === 1 && <div>page 2</div>}
              {index === 2 && <div>page 3</div>}
              {index === 3 && <div>page 4</div>}
            </motion.div>
          </AnimatePresence>
          <div className="hidden w-full pb-[4rem] md:flex justify-center">
            <button
              onClick={index == 3 ? gotoUser : nextPanel}
              className="max-w-[13.25rem]   mx-auto  bg-[#0082FB] text-white px-4 rounded-[10px] font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-[#0082FB]/90 hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              {index == 3 ? 'Complete Profile' : 'Save and Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
