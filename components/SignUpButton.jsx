import React from 'react';

const SignUpButton = ({ isAllValid, label, nextPanel }) => {
  return (
    <button
      disabled={!isAllValid}
      onClick={nextPanel}
      type="button"
      className={`mt-5 py-[9px] w-full h-[40px] text-[0.875rem] rounded-[5px]  font-semibold  ${
        isAllValid
          ? 'bg-[#3365E6] text-white hover:bg-[#3365E6]/90 hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer'
          : 'bg-primary text-light-gray cursor-default'
      }`}>
      {label}
    </button>
  );
};

export default SignUpButton;
