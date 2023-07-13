import React, { useEffect } from 'react';
import { useState } from 'react';
import GridComponent from '@/components/CompaniesGrid';
import CompaniesModal from '@/components/CompaniesModal';
import { useSelector } from 'react-redux';

const Companies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handelModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const { companiesList } = useSelector((state) => state.company);

  useEffect(() => {}, [companiesList]);

  return (
    <div className=" bg-white overflow-y-auto">
      <div className="max-w-[62.5rem] w-full   mx-auto z-0">
        {/* Search Field */}

        {/* Cards section */}
        <div className="  lg:pt-[2.25rem] p-[0.9375rem] ">
          <div className="flex justify-end">
            <div
              onClick={() => handelModalOpen()}
              className="px-[14.5px] flex-shrink-0 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px]">
              <p className="text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer">
                Add Company
              </p>
            </div>
          </div>
          <div className="w-full mt-4">
            <GridComponent items={companiesList} />
          </div>
        </div>
        {/* Modal */}
        <CompaniesModal
          isModalOpen={isModalOpen}
          handelModalOpen={handelModalOpen}
          handelModalClose={handelModalClose}
        />
      </div>
    </div>
  );
};

export default Companies;
