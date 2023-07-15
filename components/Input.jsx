import React from 'react';

const Input = ({ label, inputValue, setInputValue, placeholder }) => {
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full">
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem] capitalize">
        {label}
      </label>
      <input
        type="text"
        name="text"
        value={inputValue}
        onChange={handleInput}
        placeholder={placeholder}
        className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem]  mb-[0.8125rem]  text-primary-text  border border-[#d7d7d7] focus:outline-black focus:border-black
        `}
      />
    </div>
  );
};

export default Input;
