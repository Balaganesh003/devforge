import React, { useState, useEffect, useRef } from 'react';
import SpinnerLogo from '@/assets/spinner.gif';
import Image from 'next/image';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const data = [
  {
    id: 1,
    name: 'Students',
    value: '200K+',
    basis: 'worldwide',
  },
  {
    id: 2,
    name: 'Global Opportunities',
    value: '1M+',
    basis: 'worldwide',
  },
  {
    id: 3,
    name: 'Organizations',
    value: '$30M+',
    basis: 'per year',
  },
  {
    id: 4,
    name: 'Collages/Universities',
    value: '42%',
    basis: 'average time saved',
  },
];

const Swapper = () => {
  const [active, setActive] = useState(1);

  const scrollRef = useRef(null);

  const [width, setWidth] = useState(0);

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handelAutoChange = () => {
    if (active === data.length) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  };

  useEffect(() => {
    if (width > 1024) {
      const interval = setInterval(() => {
        handelAutoChange();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [active, width]);

  const handleNext = () => {
    if (active < data.length) {
      setActive(active + 1);
      scrollRef.current.scrollBy({
        left: document.body.offsetWidth - 40,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (active > 1) {
      setActive(active - 1);
      scrollRef.current.scrollBy({
        left: -(document.body.offsetWidth - 40),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mt-[4.8rem]">
      {/* swapper */}
      <section className="pt-[48px] pb-[80px]  relative overflow-hidden lg:overflow-visible bg-[#FCFAF2]">
        <div className="mb-[4rem] lg:mb-[6.4rem] relative z-2 max-w-[1440px] mx-auto">
          <h2 className="text-center text-[#471C3D] text-[2.5rem] lg:text-[4.0625rem]  font-CabinetGrotesk-Bold tracking-[-0.02em] leading-[.9230769230769231]">
            Numbers we are proud of
          </h2>
        </div>
        <div className="hidden xl:px-[9.6rem] lg:px-[3.2rem] max-w-[1440px] lg:flex gap-7 mx-auto">
          <div className="px-[1.2rem] w-[33.333333%] flex-shrink-0">
            <div className="flex flex-col gap-y-[3.6rem] rounded-[20px] p-[3rem] bg-white justify-center ">
              {data.map((item) => (
                <button
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className={`text-[1.8rem] flex justify-start items-center font-semibold font-CabinetGrotesk-Medium px-5 py-[14px] border rounded-[10px] leading-[1.125rem]  relative  ${
                    active === item.id
                      ? 'text-white bg-[#ED4A60] border-[#ED4A60]'
                      : 'text-[#471C3D] bg-white border-[#d9d9d9]'
                  } `}>
                  <span
                    src={SpinnerLogo}
                    alt="spinner"
                    className={`w-[1.5rem] loader absolute left-[6px] top-1/2 -translate-y-1/2   transition-all duration-1000 h-[1.5rem] inline-block mr-5 ${
                      active === item.id ? 'animate-fade-in' : 'hidden'
                    }`}
                  />

                  <div
                    className={`${
                      active === item.id && ' animate-fade-out-in'
                    }  font-CabinetGrotesk-Medium text-[22px] leading-[22px] break-words text-left`}>
                    {item.name}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="px-[0.75rem] w-[66.666667%] bg-white rounded-[20px] p-7">
            <div className="h-full relative ">
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  rounded-[20px] w-fit mx-auto">
                <p className=" font-CabinetGrotesk-Extrabold text-[22rem] tracking-[-0.5rem] leading-[22rem] text-center text-[#471C3D] 2xl:text-[220px] 2xl:leading-[1]">
                  {data[active - 1].value}
                </p>
                <span className="block text-[3.3rem] font-CabinetGrotesk-Bold leading-[0.9777777777777] tracking-[-0.02em] text-center text-[#471C3D]">
                  {data[active - 1].basis}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div
          style={{ scrollbarGutter: 'stable' }}
          className="flex flex-col lg:hidden w-full h-full">
          <div
            ref={scrollRef}
            className={`flex w-full overflow-x-auto scrollbar-hide space-x-[16px] px-[24px] h-full last:mr-[24px] `}>
            {data.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-[calc(100%-0.5em)]`}>
                <div className="p-[28px] h-full flex flex-col items-center bg-white border border-[#471C3D] rounded-2xl">
                  <p className="text-[#ED4A60] text-[1.2rem] mobile-md:text-[12.5px] text-center leading-[20px] font-bold">
                    {item.name}
                  </p>
                  <p className="font-bold mt-[8px] text-[8rem] mobile-md:text-[92px] leading-[72px] tracking-[-0.01rem] text-center text-[#471C3D]">
                    {item.value}
                  </p>
                  <p className="font-bold mt-[20px] text-[1.2rem] mobile-md:text-[20px] leading-[1.2] tracking-[-0.01rem] text-center text-[#471C3D]">
                    {item.basis}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[3.2rem] w-full h-[44px] flex justify-between px-[25px]">
            <button
              onClick={handlePrev}
              disabled={active === 1}
              className={`w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#471C3D] ${
                active === 1 && 'opacity-40'
              }`}>
              <BsChevronLeft className="text-[#471C3D] text-[0.875rem]" />
            </button>

            <div className="py-[9px] px-[20px] w-fit border flex gap-1 border-[#471C3D] h-[44px] rounded-lg items-center">
              <span className="text-[14px] leading-6 tracking-[-0.02rem]">
                {active}
              </span>
              <span className="text-[14px] leading-6 tracking-[-0.02rem]">
                /
              </span>
              <span className="text-[14px] leading-6 tracking-[-0.02rem]">
                {data.length}
              </span>
            </div>
            <button
              onClick={handleNext}
              disabled={active === data.length}
              className={`w-[44px] h-[44px] rounded-full border flex justify-center items-center border-[#471C3D] ${
                active === data.length && 'opacity-40'
              }`}>
              <BsChevronRight className="text-[#471C3D] text-[14px] " />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swapper;
