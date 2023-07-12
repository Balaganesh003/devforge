import React, { useEffect, useRef } from 'react';
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
  'MIDDLE EAST',
];

const CommunityClone = () => {
  const swapperRef = useRef(null);

  useEffect(() => {
    const swapper = swapperRef.current;
    const list = Array.from(swapper.children);
    let count = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let count6 = 0;
    let count7 = 0;

    const scrollInterval = setInterval(() => {
      if (count === -1) {
        count = list.length - 1;
        list[0].style.transform = `translateY(${-100}%)`;
        list[0].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        setTimeout(() => {
          list[0].style.opacity = 0;
          list[0].style.transition = 'none';
          list[0].style.transform = `translateY(${600}%)`;
        }, 200);
      } else {
        list[0].style.transform = `translateY(${count * 100}%)`;
        list[0].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count2 === -2) {
        count2 = list.length - 2;
        list[1].style.transform = `translateY(${-200}%)`;
        list[1].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        setTimeout(() => {
          list[1].style.opacity = 0;
          list[1].style.transition = 'none';

          list[1].style.transform = `translateY(${500}%)`;
        }, 200);
      } else {
        list[1].style.transform = `translateY(${count2 * 100}%)`;
        list[1].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count3 === -3) {
        count3 = list.length - 3;
        list[2].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        list[2].style.transform = `translateY(${-300}%)`;

        setTimeout(() => {
          list[2].style.opacity = 0;
          list[2].style.transition = 'none';

          list[2].style.transform = `translateY(${400}%)`;
        }, 200);
      } else {
        list[2].style.transform = `translateY(${count3 * 100}%)`;
        list[2].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count4 === -4) {
        count4 = list.length - 4;
        list[3].style.transform = `translateY(${-400}%)`;
        list[3].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        setTimeout(() => {
          list[3].style.opacity = 0;
          list[3].style.transition = 'none';

          list[3].style.transform = `translateY(${300}%)`;
        }, 200);
      } else {
        list[3].style.transform = `translateY(${count4 * 100}%)`;
        list[3].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count5 === -5) {
        count5 = list.length - 5;
        list[4].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        list[4].style.transform = `translateY(${-500}%)`;

        setTimeout(() => {
          list[4].style.opacity = 0;
          list[4].style.transition = 'none';

          list[4].style.transform = `translateY(${200}%)`;
        }, 200);
      } else {
        list[4].style.transform = `translateY(${count5 * 100}%)`;
        list[4].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count6 === -6) {
        count6 = list.length - 6;
        list[5].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        list[5].style.transform = `translateY(${-600}%)`;

        setTimeout(() => {
          list[5].style.opacity = 0;
          list[5].style.transition = 'none';

          list[5].style.transform = `translateY(${100}%)`;
        }, 200);
      } else {
        list[5].style.transform = `translateY(${count6 * 100}%)`;
        list[5].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      if (count7 === -7) {
        count7 = list.length - 7;

        list[6].style.transform = `translateY(${-700}%)`;
        list[6].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';

        setTimeout(() => {
          list[6].style.opacity = 0;
          list[6].style.transition = 'none';

          list[6].style.transform = `translateY(${0}%)`;
        }, 200);
      } else {
        list[6].style.transform = `translateY(${count7 * 100}%)`;
        list[6].style.transition =
          'opacity 500ms ease-out, transform 500ms ease-out';
      }

      count--;
      count2--;
      count3--;
      count4--;
      count5--;
      count6--;
      count7--;

      // list[0].style.opacity = `${
      //   count === -1
      //     ? 0.2
      //     : count === 0
      //     ? 1
      //     : count === 1
      //     ? 0.4
      //     : count === 2
      //     ? 0.2
      //     : count === 3
      //     ? 0.1
      //     : count === 4
      //     ? 0.05
      //     : count === 5
      //     ? 0.05
      //     : 0
      // }`;

      // list[1].style.opacity = `${
      //   count2 === -2
      //     ? 0.2
      //     : count2 === -1
      //     ? 1
      //     : count2 === 0
      //     ? 0.4
      //     : count2 === 1
      //     ? 0.2
      //     : count2 === 2
      //     ? 0.1
      //     : count2 === 3
      //     ? 0.05
      //     : count2 === 4
      //     ? 0.05
      //     : 0
      // }`;

      // list[2].style.opacity = `${
      //   count3 === -3
      //     ? 0.2
      //     : count3 === -2
      //     ? 1
      //     : count3 === -1
      //     ? 0.4
      //     : count3 === 0
      //     ? 0.2
      //     : count3 === 1
      //     ? 0.1
      //     : count3 === 2
      //     ? 0.05
      //     : count3 === 3
      //     ? 0.05
      //     : 0
      // }`;

      // list[3].style.opacity = `${
      //   count4 === -4
      //     ? 0.2
      //     : count4 === -3
      //     ? 1
      //     : count4 === -2
      //     ? 0.4
      //     : count4 === -1
      //     ? 0.2
      //     : count4 === 0
      //     ? 0.1
      //     : count4 === 1
      //     ? 0.05
      //     : count4 === 2
      //     ? 0.05
      //     : 0
      // }`;

      // list[4].style.opacity = `${
      //   count5 === -5
      //     ? 0.2
      //     : count5 === -4
      //     ? 1
      //     : count5 === -3
      //     ? 0.4
      //     : count5 === -2
      //     ? 0.2
      //     : count5 === -1
      //     ? 0.1
      //     : count5 === 0
      //     ? 0.05
      //     : count5 === 1
      //     ? 0.05
      //     : 0
      // }`;

      // list[5].style.opacity = `${
      //   count6 === -6
      //     ? 0.2
      //     : count6 === -5
      //     ? 1
      //     : count6 === -4
      //     ? 0.4
      //     : count6 === -3
      //     ? 0.2
      //     : count6 === -2
      //     ? 0.1
      //     : count6 === -1
      //     ? 0.05
      //     : count6 === 0
      //     ? 0.05
      //     : 0
      // }`;

      // list[6].style.opacity = `${
      //   count7 === -7
      //     ? 0.2
      //     : count7 === -6
      //     ? 1
      //     : count7 === -5
      //     ? 0.4
      //     : count7 === -4
      //     ? 0.2
      //     : count7 === -3
      //     ? 0.1
      //     : count7 === -2
      //     ? 0.05
      //     : count7 === -1
      //     ? 0.05
      //     : 0
      // }`;

      list[0].style.opacity = `${1}`;
      list[1].style.opacity = `${1}`;
      list[2].style.opacity = `${1}`;
      list[3].style.opacity = `${1}`;
      list[4].style.opacity = `${1}`;
      list[5].style.opacity = `${1}`;
      list[6].style.opacity = `${1}`;

      if (count === list.length + 1) {
        count = 0;
      }

      if (count2 === list.length) {
        count2 = 0;
      }

      if (count3 === list.length + -1) {
        count3 = 0;
      }

      if (count4 === list.length + -2) {
        count4 = 0;
      }

      if (count5 === list.length + -3) {
        count5 = 0;
      }

      if (count6 === list.length + -4) {
        count6 = 0;
      }

      if (count7 === list.length + -5) {
        count7 = 0;
      }
    }, 2500);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className=" overflow-hidden px-[3.6rem] small-lg:px-[6.4rem] relative pt-[9.6rem] pb-[1.6rem] w-full max-w-[1280px] mx-auto">
      {/* Swipper */}

      <div className="grid text-[#deb556] grid-cols-2  gap-[48px] max-w-[1280px]">
        {/* Left */}

        <div className=" bg-[#F4F8FF] px-[3.6rem] py-[6.4rem] rounded-[20px] flex flex-col gap-[36px]  items-center justify-center">
          <div className=" font-CabinetGrotesk-Bold text-[3.6rem] 2xl:text-[48px] small-lg:text-[5.5rem] break-words  leading-[1.1] flex flex-col">
            <span className="text-[#242C43] leading-[1.5]">We are live in</span>
            <span className="text-[#426DCE] leading-[1.5]">United States!</span>
          </div>
          <div>
            <Image src={Usa} alt="swipper" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-[#FFF9F9] pt-[6.4rem] pb-[7.2rem] rounded-[20px]">
          <div className="border-2 px-[3.2rem] py-[1.6rem] uppercase 2xl:mb-[32px] mb-[1.8rem] small-l:mb-[3.6rem] border-[#8529CD]  rounded-full ">
            <span className="font-CabinetGrotesk-Bold text-[1.6rem] small-lg:text-[2.4rem] 2xl:text-[20px] leading-[1] text-[#8529CD]">
              Coming in 2023
            </span>
          </div>
          <div className="w-fit h-fit relative overflow-visible  ">
            <div
              ref={swapperRef}
              className=" relative flex flex-col items-center">
              {SliderData.map((item, index) => (
                <div
                  key={index}
                  className="text-[3.6rem] small-lg:text-[5.5rem] 2xl:text-[48px] font-HelveticaNeueLTStd-Lt uppercase w-fit leading-[1.1] whitespace-nowrap py-[1rem] text-[#481C3E]">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <Link
            href={'/user'}
            className="mt-[-4.8rem] 2xl:mt-[-58px] text-[1.6rem] small-lg:text-[2.4rem] text-[#456FCE] z-10 font-CabinetGrotesk-Bold 2xl:text-[24px]">
            Get early access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommunityClone;
