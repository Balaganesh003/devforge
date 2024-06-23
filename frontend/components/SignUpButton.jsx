import React from 'react';
import Dualring from '@/assets/dualring.svg';
import Image from 'next/image';

const SignUpButton = ({ isAllValid, label, nextPanel, isLoading }) => {
  return (
    <button
      disabled={!isAllValid}
      onClick={nextPanel}
      type="button"
      className={`mt-5 py-[9px] w-full h-[40px] text-[0.9375rem] rounded-[5px]  font-medium  ${
        isAllValid
          ? 'bg-[#3365E6] text-white hover:bg-[#3365E6]/90 hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer'
          : 'bg-primary text-light-gray cursor-default'
      }`}>
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

export default SignUpButton;
