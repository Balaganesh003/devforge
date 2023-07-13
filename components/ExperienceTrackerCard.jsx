import React from 'react';

const colorsList = ['bg-[#FFDADA]', 'bg-[#FFDA]', 'bg-[#FDAD]', 'bg-[#DADA]'];

const ExperienceTrackerCard = ({ companyName, url, role, experience }) => {
  return (
    <div className="grid grid-cols-3 bg-white  duration-200 gap-[15px]   divide-x-[1px] divide-[#d7d7d7] border-b border-[#d7d7d7] ">
      <p className="px-[0.9375rem] py-3 h-full items-center flex">
        {/* <Link href={url || '#'} target="_blank"> */}
        <div className="flex  truncate items-center gap-4 ">
          <div
            className={`w-[2rem] h-[2rem] border flex items-center justify-center rounded-md border-[#d7d7d7] ${
              colorsList[Math.floor(Math.random() * colorsList.length)]
            } `}>
            <span className="uppercase text-[1.25rem] font-CabinetGrotesk-Bold">
              {companyName[0]}
            </span>
          </div>

          <span className="truncate text-ellipsis">{companyName}</span>
        </div>
        {/* </Link> */}
      </p>
      <p className="px-[0.9375rem] py-3 h-full items-center flex break-words text-ellipsis  truncate whitespace-break-spaces">
        {role}
      </p>
      <p className="px-[0.9375rem] py-3 h-full items-center flex">
        {experience}
      </p>
    </div>
  );
};

export default ExperienceTrackerCard;
