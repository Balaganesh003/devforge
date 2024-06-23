import React from 'react';
import Dualring from '@/assets/dualring.svg';
import Image from 'next/image';

const ColouredButton = ({ handelClick, label, bgColor, isLoading }) => {
  return (
    <button
      onClick={handelClick}
      type="button"
      className={`  text-[0.875rem] w-[155px] h-[40px] text-white tracking-[-0.015em] rounded-[5px] font-medium  relative   hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ${
        bgColor ? bgColor : 'bg-[#3365E6] hover:bg-[#3365E6]/90'
      } `}>
      {isLoading ? (
        <Image
          src={Dualring}
          alt="dualring"
          width={24}
          height={24}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2"
        />
      ) : (
        label
      )}
    </button>
  );
};

export default ColouredButton;
