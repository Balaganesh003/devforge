import React from 'react';

const SignUpButton = ({ isAllValid, label }) => {
  return (
    <button
      disabled={isAllValid}
      type="button"
      className={`mt-5 py-[9px] text-[0.875rem] rounded font-semibold  ${
        isAllValid
          ? 'bg-primary-button text-primary-text hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer'
          : 'bg-primary text-light-gray cursor-default'
      }`}>
      {label}
    </button>
  );
};

export default SignUpButton;
