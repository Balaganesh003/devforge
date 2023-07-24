import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '../assets/exclamatory.svg';

const UrlField = ({
  label,
  errorMessage,
  Url,
  setUrl,
  UrlError,
  setUrlError,
  placeholder,
}) => {
  const isValidUrl = (url) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(url);
  };

  const handleInput = (e) => {
    setUrl(e.target.value);
    isValidUrl(e.target.value) === false && e.target.value !== ''
      ? setUrlError(true)
      : setUrlError(false);
  };

  const checkisValid = () => {
    if (isValidUrl(Url) === false && Url !== '') {
      setUrlError(true);
    }
  };

  return (
    <div>
      <label
        htmlFor="email"
        className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <input
        type="text"
        name="url"
        id="url"
        value={Url}
        placeholder={placeholder}
        onChange={handleInput}
        onBlur={checkisValid}
        className={`w-full text-[0.9375rem] tracking-[-0.005em] bg-white h-11 rounded py-[0.1rem] px-[0.875rem] mb-[0.8125rem]  text-primary-text border border-[#d7d7d7] focus:shadow-field focus:border-black transition-field duration-[0.25s] ease-in-out-expo outline-none`}
      />
      {UrlError && (
        <p className="text-[0.875rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
          <Image
            src={ErrorIcon}
            alt="Error Icon"
            width={16}
            height={16}
            className="bg-text-red w-5 h-5 rounded"
          />
          <span className="pl-[0.625rem]">
            {errorMessage ? errorMessage : 'Please enter a valid URL'}
          </span>
        </p>
      )}
    </div>
  );
};

export default UrlField;
