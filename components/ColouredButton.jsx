import React from 'react';

const ColouredButton = ({ handelClick, label }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      className={` py-[9px] text-[0.875rem] text-white rounded font-semibold px-8 bg-[#3365E6]  hover:bg-[#3365E6]/90 hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer `}>
      {label}
    </button>
  );
};

export default ColouredButton;
