import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '@/assets/exclamatory.svg';

const InputField = ({
  label,
  errorMessage,
  inputValue,
  setInputValue,
  isEmpty,
  setIsEmpty,
  placeholder,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    isFirstTime
      ? setIsFirstTime(false)
      : e.target.value === ''
      ? setIsEmpty(true)
      : setIsEmpty(false);
  };

  const checkIsEmpty = () => {
    if (inputValue === '') {
      setIsFirstTime(false);
      setIsEmpty(true);
    }
  };

  return (
    <div>
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <input
        type="text"
        name="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInput}
        onBlur={checkIsEmpty}
        className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem]  mb-[0.8125rem]  text-primary-text ${
          isEmpty
            ? 'outline outline-2 outline-text-red'
            : 'border border-[#d7d7d7] focus:outline-black'
        }`}
      />
      {isEmpty && (
        <p className="text-[0.75rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
          <Image
            src={ErrorIcon}
            alt="Error Icon"
            width={16}
            height={16}
            className="bg-text-red w-5 h-5 rounded-full"
          />
          <span className="pl-[0.625rem]">{errorMessage}</span>
        </p>
      )}
    </div>
  );
};

export default InputField;
