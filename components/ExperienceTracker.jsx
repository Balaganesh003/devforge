import React, { useEffect, useState } from 'react';
import ExperienceTrackerCard from './ExperienceTrackerCard';
import Input from './Input';
import UrlField from './UrlField';
import ColouredButton from './ColouredButton';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const ExperienceTrackerList = [
  {
    id: 1,
    companyName: 'CARS 24',
    role: 'Operations Associate (SC - Lifestyle - Kannada)',
    experience: '1 - 4 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Open Financial Technologies Pvt. Ltd.',
    role: 'Associate Product Manager',
    experience: '6m - 1 yr',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'PhonePe',
    role: 'Product Solution Engineer',
    experience: '2+ yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Zolo',
    role: 'Talent Acquisition Associate',
    experience: '2+ yrs',
    url: 'https://www.google.com/',
  },
];

const colorsList = ['bg-[#FFDADA]', 'bg-[#FFDA]', 'bg-[#FDAD]', 'bg-[#DADA]'];

const ExperienceTracker = () => {
  return (
    <div className="w-full mobile-lg:border  grid border-[#d7d7d7]  border-b grid-cols-7   divide-x-[1px] divide-[#d7d7d7] rounded-t-lg text-[#4D4F9E]  h-full  min-h-[45rem] rounded-lg relative  bg-white border-collapse ">
      <div className=" col-span-2  h-full   ">
        <p className="text-[1.25rem] p-[0.9375rem] rounded-tl-lg font-CabinetGrotesk-Bold border-b border-[#d7d7d7] bg-[#EDF3FF]">
          Company
        </p>
        {ExperienceTrackerList.map((item, i) => (
          <p
            key={i}
            className="p-[0.9375rem] py-3 h-12 text-[#2E2E2E] font-normal border-b border-[#d7d7d7]  items-center flex col-span-2">
            <div className="flex  truncate items-center gap-4 ">
              <div
                className={`w-[1.75rem] flex-shrink-0 h-[1.75rem] border flex items-center justify-center rounded-md border-[#d7d7d7] ${
                  colorsList[Math.floor(Math.random() * colorsList.length)]
                } `}>
                <span className="uppercase text-[1.25rem] font-CabinetGrotesk-Bold">
                  {item.companyName[0]}
                </span>
              </div>
              <span className="truncate text-ellipsis">{item.companyName}</span>
            </div>
          </p>
        ))}
      </div>
      <div className=" col-span-3  h-full   ">
        <p className="text-[1.25rem] p-[0.9375rem]  font-CabinetGrotesk-Bold border-b border-[#d7d7d7] bg-[#EDF3FF]">
          Role
        </p>
        {ExperienceTrackerList.map((item, i) => (
          <p
            key={i}
            className="p-[0.9375rem] h-12 py-3 text-[#2E2E2E] font-normal border-b border-[#d7d7d7] items-center flex col-span-2">
            <span className="truncate text-ellipsis">{item.role}</span>
          </p>
        ))}
      </div>
      <div className=" col-span-2  h-full   ">
        <p className="text-[1.25rem] p-[0.9375rem] rounded-tr-lg font-CabinetGrotesk-Bold border-b border-[#d7d7d7] bg-[#EDF3FF]">
          Experience
        </p>
        {ExperienceTrackerList.map((item, i) => (
          <p
            key={i}
            className="p-[0.9375rem] h-12 flex items-center text-[#2E2E2E] font-normal border-b border-[#d7d7d7]  col-span-2">
            <span className="truncate text-ellipsis">{item.experience}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTracker;
