import React from 'react';

const ColouredButton = ({ handelClick, label, bgColor }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      className={`  text-[0.875rem] w-[155px] h-[40px] text-white tracking-[-0.015em] rounded-[5px] font-medium     hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ${
        bgColor ? bgColor : 'bg-[#3365E6] hover:bg-[#3365E6]/90'
      } `}>
      {label}
    </button>
  );
};

export default ColouredButton;
