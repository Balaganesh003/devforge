import React from 'react';
import Image from 'next/image';
import BlueBulb from '@/assets/BlueBlub.svg';

const HIghlightCard = () => {
  return (
    <div
      className={`px-3 md:px-6 py-6  min-h-[] max-w-[45rem] text-ellipsis cursor-default bg-[#FFF5F3] border-[3px] border-[#F2BFA9]  rounded-[20px]`}>
      <div className="flex gap-5 ">
        <div className="flex flex-shrink-0 ">
          <Image
            src={BlueBulb}
            width={32}
            height={32}
            alt="ProfilePhoto"
            className="w-9 h-9 rounded-full"
          />
        </div>
        <div className="w-full my-2 rounded-md flex flex-col justify-center">
          {/* Heading */}

          <h1 className="text-primary-text mb-2 text-[1rem] font-semibold leading-[130%] ">
            Market is too saturated for freshers bro...
          </h1>
          {/* Description */}
          <div className="text-black leading-[1.5rem] pr-2 text-[0.875rem] font-normal break-words description  flex-shrink text-ellipsis ">
            The actual problem is that many pay after placement programs are not
            truly helping enrolled students in the aspect of placements.
            Moreover, after spending 6 months to one year, all they have on
            their resume is some capstone projects & no work experience which
            creates employment gap making them less competent as they never put
            their skills at work in real time working on real projects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIghlightCard;
