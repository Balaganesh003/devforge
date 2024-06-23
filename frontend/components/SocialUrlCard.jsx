import React, { useState } from 'react';
import Image from 'next/image';
import ErrorIcon from '../assets/exclamatory.svg';

const SocialUrlCard = ({
  errorMessage,
  logo,
  Url,
  setUrl,
  UrlError,
  setUrlError,
  placeholder,
}) => {
  const [handelFocus, setHandelFocus] = useState(false);

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
    setHandelFocus(false);
  };
  return (
    <div>
      <div
        class={`flex ${
          handelFocus ? 'shadow-field border-[#0e0e0e]' : 'border-[#d7d7d7]'
        }  transition-all duration-300 rounded border  mb-[0.8125rem]`}>
        <div class="w-12 border-r bg-[#F5F5F5] rounded-l flex-shrink-0 flex items-center justify-center">
          <Image
            src={logo}
            alt="Error Icon"
            width={28}
            height={28}
            className=" object-cover rounded-full"
          />
        </div>

        <input
          type="text"
          name="url"
          id="url"
          value={Url}
          onFocus={() => setHandelFocus(true)}
          placeholder={placeholder}
          onChange={handleInput}
          onBlur={checkisValid}
          className="w-full text-sm focus:outline-none bg-white h-11 py-[0.1rem] px-[0.875rem]  text-primary-text rounded-r"
        />
      </div>

      {UrlError && (
        <p className="text-[0.75rem] leading-[125%] font-normal text-text-red flex items-center mt-[0.15rem]  ">
          <Image
            src={ErrorIcon}
            alt="Error Icon"
            width={16}
            height={16}
            className="bg-text-red w-5 h-5 rounded-full"
          />
          <span className="pl-[0.625rem]">
            {errorMessage ? errorMessage : 'Please enter a valid URL'}
          </span>
        </p>
      )}
    </div>
  );
};

export default SocialUrlCard;
