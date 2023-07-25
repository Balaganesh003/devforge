import React from 'react';
import Image from 'next/image';
import SaveOutlineButton from '@/components/SaveOutlineButton';
import { useDispatch } from 'react-redux';
import { postsActions } from '@/store/posts-slice';

const JobsCard = ({
  role,
  company,
  location,
  type,
  remote,
  logo,
  no_of_applicants,
  wholeCard,
  setIsModalOpen,
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
            <Image
              src={logo ? logo : CompanyLogo}
              alt="Company Logo"
              width={200}
              height={200}
              className="w-[5.625rem] h-[5.625rem] min-w-[5.625rem] flex-shrink-0 rounded"
            />
            <div>
              <p className="text-[0.75rem] leading-[1rem] opacity-0 font-normal text-gray-text group-hover:opacity-[100%] transition-all duration-300">
                {no_of_applicants} Applicants
              </p>
            </div>
          </div>
          {/* Job Title */}
          <div>
            <p className="text-[1rem] mb-2 leading-[1.375rem] font-medium text-primary-text">
              {role}
            </p>
            <p className="mb-[12px] text-[0.875rem] leading-[1rem] font-normal ">
              {company}
            </p>
            <div className="mb-3 text-ellipsis text-[0.75rem] leading-[1rem] text-primary-text">
              <span className="captilize">{type}</span>
              <span className="mx-[3px]">•</span>
              <span className="captilize">
                {location} {`${remote && ' Remote'}`}
              </span>
            </div>
          </div>
        </div>
        <div>
          <hr className="border-gray-border   -ml-[15px] -mr-[15px] my-[15px]" />
          <div className="flex justify-between gap-3 h-fit">
            <SaveOutlineButton />
            <div className="flex gap-1 items-center px-[16px]  max-h-[3rem] h-[2.5rem] border border-black rounded hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
              <button className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
