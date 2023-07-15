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
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
  {
    id: 1,
    companyName: 'Google',
    role: 'UI UX Designer',
    experience: '1 - 2 yrs',
    url: 'https://www.google.com/',
  },
];

const ExperienceTracker = () => {
  return (
    <div className="w-full mobile-lg:border border-[#d7d7d7]  rounded-lg relative  bg-white border-collapse ">
      <div className="grid border-[#d7d7d7] bg-[#EDF3FF] border-b grid-cols-3 gap-[15px]  divide-x-[1px] divide-[#d7d7d7] rounded-t-lg text-[#4D4F9E] font-CabinetGrotesk-Bold">
        <p className="text-[1.25rem] p-[0.9375rem] ">Company</p>
        <p className="text-[1.25rem]  p-[0.9375rem] ">Role</p>
        <p className=" text-[1.25rem] p-[0.9375rem]">Experience </p>
      </div>
      <div className="w-full flex flex-col ">
        {ExperienceTrackerList.map((experience) => (
          <ExperienceTrackerCard
            key={experience.id}
            companyName={experience.companyName}
            role={experience.role}
            experience={experience.experience}
            url={experience.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTracker;
