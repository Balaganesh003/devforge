import React from 'react';
import Image from 'next/image';
import StarLogo from '@/assets/star.svg';
import { useDispatch } from 'react-redux';
import { postsActions } from '@/store/posts-slice';

const CompanyCard = ({
  no_events,
  no_jobs,
  company,
  location,
  stage,
  employees,
  logo,
  setIsModalOpen,
  wholeCard,
}) => {
  const dispatch = useDispatch();

  const handelClick = () => {
    setIsModalOpen(true);
    dispatch(postsActions.setSelectedCard(wholeCard));
  };

  return (
    <div
      onClick={() => handelClick()}
      className="w-full  bg-white p-[0.9375rem] rounded border border-gray-border hover:shadow-card text-primary-text cursor-pointer group overflow-hidden ">
      {/* Logo and applicants */}
      <div className="flex justify-between flex-col flex-grow-1 h-full">
        <div>
          <div className="flex justify-between mb-[10px]">
            <div>
              <Image
                src={logo ? logo : CompanyLogo}
                alt="Company Logo"
                width={200}
                height={200}
                className="w-[5.625rem] h-[5.625rem] min-w-[5.625rem] flex-shrink-0 rounded"
              />
            </div>
            <div className="w-fit h-full ml-[15px] bg-gray-hover border border-gray-border p-[0.625rem] rounded flex-shrink-0">
              <div className="flex items-center gap-1">
                <Image
                  src={StarLogo}
                  alt="Star Logo"
                  width={24}
                  height={24}
                  className="w-[0.95rem] h-[1rem]"
                />
                <p className="text-[0.75rem] leading-[1rem] font-medium flex-shrink-0 text-primary-text">
                  Jobs & Events:
                </p>
              </div>
              <div className="mt-[10px] flex">
                {no_events > 0 && (
                  <div className="flex flex-col mr-[10px]">
                    <p className="text-[1.125rem] leading-[28px] font-medium">
                      {no_events}
                    </p>
                    <p className="text-[0.75rem] text-secondary-text leading-[1rem]">
                      Events
                    </p>
                  </div>
                )}
                {no_jobs > 0 && (
                  <div className="flex flex-col ">
                    <p className="text-[1.15rem] leading-[28px] font-medium">
                      {no_jobs}
                    </p>
                    <p className="text-[0.75rem] text-secondary-text leading-[1rem]">
                      Jobs
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Job Title */}
          <div className="w-full">
            <p className="text-[1rem] mb-2 leading-[1.375rem] font-medium text-primary-text">
              {company}
            </p>
            <div className="mb-3 text-ellipsis text-[0.75rem] leading-[1rem] text-primary-text ">
              <span className="captilize">Stage: {stage}</span>
              <span className="mx-[3px]">•</span>
              <span className="captilize mr-[3px]">{`Employees: ${employees} `}</span>
              <span className="mr-[3px]">•</span>
              {location.length > 0 && (
                <span className="captilize">Location: {location}</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-border   -ml-[15px] -mr-[15px] my-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
