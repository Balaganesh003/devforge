import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '../assets/exclamatory.svg';

const EmailField = ({
  label,
  errorMessage,
  Email,
  placeholder,
  setEmail,
  EmailError,
  setEmailError,
}) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInput = (e) => {
    setEmail(e.target.value);
    isFirstTime
      ? setIsFirstTime(false)
      : isValidEmail(e.target.value) === false
      ? setEmailError(true)
      : setEmailError(false);
  };

  const checkisValid = () => {
    if (isValidEmail(Email) === false) {
      setIsFirstTime(false);
      setEmailError(true);
    }
  };

  return (
    <div>
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder={placeholder}
        value={Email}
        onChange={handleInput}
        onBlur={checkisValid}
        className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem]  mb-[0.8125rem]  text-primary-text ${
          EmailError
            ? 'outline outline-2 outline-text-red'
            : 'border border-[#d7d7d7] focus:outline-black'
        }`}
      />
      {EmailError && (
        <p className="text-[0.75rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
          <Image
            src={ErrorIcon}
            alt="Error Icon"
            width={16}
            height={16}
            className="bg-text-red w-5 h-5 rounded-full"
          />
          <span className="pl-[0.625rem]">
            {Email.length === 0 ? 'Email is required' : errorMessage}
          </span>
        </p>
      )}
    </div>
  );
};

export default EmailField;
