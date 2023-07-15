import React from 'react';

const DreamCareerCard = ({ title }) => {
  return (
    <div className="mt-[1rem] bg-white p-[1rem] min-h-[5.8125rem] rounded-lg  hover:scale-[102%] transform transition-all duration-200 ease-in-out-expo w-full flex cursor-pointer border border-[#d7d7d7] hover:shadow-card items-center">
      <p className="text-[1rem] leading-[150%] text-primary-text">{title}</p>
    </div>
  );
};

export default DreamCareerCard;
