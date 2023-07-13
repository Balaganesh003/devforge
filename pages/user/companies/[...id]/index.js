import React, { useEffect, useState } from 'react';
import FilterCard from '@/components/FilterCard';
import CompanyPage from '@/components/CompanyPage';
import { useRouter } from 'next/router';
import DreamCareers from '@/components/DreamCareers';
import ExperienceTracker from '@/components/ExperienceTracker';
import CareersPage from '@/components/CareersPage';

const Filters = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Job/Internships',
    link: 'jobandinternships',
  },
  {
    name: 'Dream Careers',
    link: 'dreamcareers',
  },
  {
    name: 'Experience Tracker',
    link: 'experiencetracker',
  },
  {
    name: 'Careers',
    link: 'careers',
  },
];
const Companies = () => {
  const router = useRouter();
  const [currentActive, setcurrentActive] = useState(null);

  const companyId =
    router.query.id?.length > 0 ? router.query.id[0] : router.query.id;

  const currentPath = router.asPath.split('/').pop();

  useEffect(() => {
    Filters.some((filter) => filter.link === currentPath)
      ? setcurrentActive(currentPath)
      : setcurrentActive('/');
    console.log(currentActive);
  }, [currentPath]);

  return (
    <div className="">
      <div className="w-full border-b sticky top-0 z-10 border-gray-border">
        <div className="h-full w-full max-w-[62.5rem] mx-auto border-b border-gray-border flex  bg-white items-center z-10 justify-start">
          <div className="sm:max-w-[62.5rem]   overflow-x-auto flex  ">
            <div className="flex flex-nowrap sm:flex-wrap">
              {Filters.map((filter, i) => (
                <FilterCard
                  currentActive={currentActive}
                  setcurrentActive={setcurrentActive}
                  key={i}
                  companyId={companyId}
                  name={filter.name}
                  link={`${filter.link}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[62.5rem] w-full min-h-[calc(100vh-9rem)] md:mt-[15px] h-full mx-auto  z-0">
        {/* Cards section */}
        {currentActive === null && <div>Loading...</div>}
        {currentActive == '/' && <CompanyPage />}
        {currentActive === 'dreamcareers' && <DreamCareers />}
        {currentActive === 'experiencetracker' && <ExperienceTracker />}
        {currentActive === 'careers' && <CareersPage />}
      </div>
    </div>
  );
};

export default Companies;
