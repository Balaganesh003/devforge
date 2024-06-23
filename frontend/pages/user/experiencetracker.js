import React, { useEffect } from 'react';

import ExperienceTracker from '@/components/ExperienceTracker';

const Companies = () => {
  return (
    <div>
      <div className="h-[200px] w-full bg-white border-b border-[#d7d7d7]"></div>
      <div className="w-full  mobile-lg:max-w-[64rem]  mx-auto  px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 my-[3.5rem]">
        <ExperienceTracker />
      </div>
    </div>
  );
};

export default Companies;
