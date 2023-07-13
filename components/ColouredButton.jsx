import React from 'react';

const ColouredButton = ({ handelClick, label }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      className={` py-[9px] text-[0.875rem] rounded font-semibold px-8 bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer `}>
      {label}
    </button>
  );
};

export default ColouredButton;
