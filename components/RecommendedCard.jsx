import React from 'react';

const RecommendedCard = ({ text }) => {
  return (
    <div className="rounded-lg bg-light-purple w-fit py-1 px-2 text-[0.875rem] text-black font-medium leading-[130%] ">
      {text}
    </div>
  );
};

export default RecommendedCard;
