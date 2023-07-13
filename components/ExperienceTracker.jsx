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
];

const ExperienceTracker = () => {
  const router = useRouter();
  const [experience, setExperience] = useState('');
  const { companiesList } = useSelector((state) => state.company);
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState(false);

  const getCompanyName = () => {
    const companyId = router.query.id[0];
    const { companyName } = companiesList.find(
      (company) => company.id === companyId
    );
    setCompany(companyName);
  };

  const experienceObj = {
    id: `${company}-${role}`,
    companyName: company,
    role,
    experience: `${experience} yrs`,
    url,
  };

  const addExperience = () => {
    if (!urlError && role && experience && url) {
      ExperienceTrackerList.push(experienceObj);
      toast.success('Experience added successfully');
      setRole('');
      setExperience('');
      setUrl('');
      setUrlError(false);
    } else {
      toast.error('Please fill all the fields');
    }
  };

  useEffect(() => {
    getCompanyName();
  }, [router.pathname]);

  return (
    <div className="mobile-lg:p-[0.9375rem] relative">
      <Toaster />
      <div className="grid grid-cols-3 gap-[15px]  mobile-lg:mt-0">
        <div className="">
          <Input
            placeholder={'Role'}
            inputValue={role}
            setInputValue={setRole}
          />
        </div>
        <div className="">
          <Input
            placeholder={'Experience (1 - 2 yrs)'}
            inputValue={experience}
            setInputValue={setExperience}
          />
        </div>
        <div className=" flex gap-3">
          <UrlField
            placeholder={'Url'}
            Url={url}
            setUrl={setUrl}
            setUrlError={setUrlError}
            UrlError={urlError}
          />
          <div onClick={addExperience} className="mt-1 w-fit ">
            <ColouredButton label="Add" />
          </div>
        </div>
      </div>

      <div className="w-full mobile-lg:border border-[#d7d7d7]   rounded-lg relative overflow-y-auto mobile-lg:h-[calc(100vh-16.2rem)]  lg:h-[calc(100vh-10.5rem)] bg-white border-collapse ">
        <div className="grid border-[#d7d7d7] border-b grid-cols-3 gap-[15px] sticky top-0 bg-white divide-x-[1px] divide-[#d7d7d7]">
          <p className=" p-[0.9375rem] ">Company</p>
          <p className="  p-[0.9375rem] ">Role</p>
          <p className="  p-[0.9375rem]">Experience </p>
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
    </div>
  );
};

export default ExperienceTracker;
