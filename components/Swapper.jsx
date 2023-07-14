import React, { useState, useEffect, useRef } from 'react';
import SpinnerLogo from '@/assets/spinner.gif';
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
  const [isMobile, setIsMobile] = useState(false);

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
        setIsMobile(false);
        handelAutoChange();
      }, 4000);
      return () => clearInterval(interval);
    } else {
      if (!isMobile) {
        setIsMobile(true);
        setActive(1);
      }
    }
  }, [active, width]);

  const handleNext = () => {
    if (active < data.length) {
      setActive(active + 1);
      scrollRef.current.scrollBy({
        left: document.body.offsetWidth - 42,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (active > 1) {
      setActive(active - 1);
      scrollRef.current.scrollBy({
        left: -(document.body.offsetWidth - 42),
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="">
      {/* swapper */}
      <section className="pt-[3rem] pb-[5rem]  relative overflow-hidden lg:overflow-visible bg-[#FCFAF2]">
        <div className="mb-10 lg:mb-18 relative z-2 max-w-[90rem] mx-auto">
          <h2 className="text-center text-[#471C3D] text-[2.5rem] lg:text-[4rem] font-semibold tracking-[-0.02em] leading-[.9230769230769231]  font-CabinetGrotesk-Bold ">
            Numbers we are proud of
          </h2>
        </div>
        <div className="hidden xl:px-[5.25rem] lg:px-[1.875rem] max-w-[90rem] lg:flex gap-7 mx-auto">
          <div className="px-[0.75rem] w-[33.333333%] flex-shrink-0">
            <div className="flex flex-col gap-y-7 rounded-xl p-7 bg-white justify-center  ">
              {data.map((item) => (
                <button
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className={`text-[1.125rem] flex justify-start items-center font-semibold font-CabinetGrotesk-Medium px-5 py-[14px] border rounded-[10px] leading-[1.125rem]  relative  ${
                    active === item.id
                      ? 'text-white bg-[#ED4A60] border-[#ED4A60]'
                      : 'text-[#471C3D] bg-white border-[#d9d9d9]'
                  } `}>
                  <span
                    src={SpinnerLogo}
                    alt="spinner"
                    className={`loader absolute left-[0px] top-1/2 -translate-y-1/2   transition-all duration-1000 h-[1.5rem] inline-block mr-4 ${
                      active === item.id ? 'animate-fade-in' : 'hidden'
                    }`}
                  />

                  <div
                    className={`${
                      active === item.id && 'animate-fade-out-in'
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
                <p className=" font-CabinetGrotesk-Extrabold text-[11.25rem] xl:text-[13.75rem] tracking-[-0.5rem] leading-[1] text-center text-[#471C3D] 2xl:text-[220px] 2xl:leading-[1]">
                  {data[active - 1].value}
                </p>
                <span className="block text-[2.087rem] font-CabinetGrotesk-Bold leading-[0.9777777777777] tracking-[-0.02em] text-center text-[#471C3D]">
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
            className={`flex w-full overflow-x-auto scrollbar-hide space-x-4 px-6 h-full last:mr-6 `}>
            {data.map((item) => (
              <div
                key={item.id}
                className={`flex-shrink-0 w-[calc(100%-0.5rem)]`}>
                <div className="p-7 h-full flex flex-col items-center bg-white border border-[#471C3D] rounded-2xl">
                  <p className="text-[#ED4A60]  text-[1rem] mobile-md:text-[1.25rem] text-center leading-[1.25rem] font-bold">
                    {item.name}
                  </p>
                  <p className="font-bold mt-2 text-[4.5rem] mobile-md:text-[5.75rem] leading-[72px] tracking-[-0.01rem] text-center text-[#471C3D]">
                    {item.value}
                  </p>
                  <p className="font-bold mt-3 text-[1rem] mobile-md:text-[1.25rem] leading-[1.2] tracking-[-0.01rem] text-center text-[#471C3D]">
                    {item.basis}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 w-full h-[44px] flex justify-between px-4">
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
