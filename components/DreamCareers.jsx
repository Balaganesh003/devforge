import React, { useState } from 'react';
import DreamCareerCard from './DreamCareerCard';
import CompaniesModal from './CompaniesModal';

const DreamCareers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelModalOpen = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };

  const handelModalClose = () => {
    document.body.style.overflow = 'unset';
    setIsModalOpen(false);
  };

  return (
    <div className="mobile-lg:p-[0.9375rem]  bg-white h-full  lg:min-h-[calc(100vh-4rem)] h-full">
      {/* Cards section */}
      <div className="border p-[0.9375rem] min-h-[calc(100vh-10.35rem)] lg:min-h-[calc(100vh-5.75rem)] rounded-lg h-full">
        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] pl-2 leading-[150%] font-semibold text-primary-text captilize cursor-pointer">
            Dream Career
          </p>
          <div
            onClick={() => handelModalOpen()}
            className="px-[14.5px] flex-shrink-0 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px]">
            <p className="text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer">
              Add Dream Career
            </p>
          </div>
        </div>
        <div className="w-full mt-[15px] grid grid-cols-1 mobile-lg:grid-cols-2 gap-x-[1.5rem] gap-y-[0.9375rem]">
          <DreamCareerCard
            title={'Design Technology Intern - Experience Design '}
          />
          <DreamCareerCard
            title={
              'Experimentation and Causal Inference Intern, Data Science and Engineering'
            }
          />
        </div>
      </div>
      {/* Modal */}
      <CompaniesModal
        isModalOpen={isModalOpen}
        handelModalOpen={handelModalOpen}
        handelModalClose={handelModalClose}
      />
    </div>
  );
};

export default DreamCareers;
