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
      <div className="flex gap-[15px] mt-2 mobile-lg:mt-0">
        <div className="flex-1">
          <Input
            placeholder={'Role'}
            inputValue={role}
            setInputValue={setRole}
          />
        </div>
        <div className="flex-1">
          <Input
            placeholder={'Experience (1 - 2 yrs)'}
            inputValue={experience}
            setInputValue={setExperience}
          />
        </div>
        <div className="flex-1">
          <UrlField
            placeholder={'Url'}
            Url={url}
            setUrl={setUrl}
            setUrlError={setUrlError}
            UrlError={urlError}
          />
        </div>
        <div onClick={addExperience} className="mt-1 w-fit ">
          <ColouredButton label="Add" />
        </div>
      </div>
      <div className="mobile-lg:p-[15px] mobile-lg:border mobile-lg:rounded-lg   ">
        <div className="w-full mobile-lg:border   rounded-lg relative overflow-y-auto mobile-lg:h-[calc(100vh-16.2rem)]  lg:h-[calc(100vh-11.35rem)] ">
          <div className="flex w-full gap-[15px] mb-[15px] sticky top-0 bg-white p-[0.9375rem]">
            <p className=" flex-1 ">Company</p>
            <p className=" flex-1 ">Role</p>
            <p className=" flex-1 ">Experience </p>
          </div>
          <div className="w-full flex flex-col gap-[15px] px-1 mobile-lg:px-[15px] pb-[15px]">
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
    </div>
  );
};

export default ExperienceTracker;
