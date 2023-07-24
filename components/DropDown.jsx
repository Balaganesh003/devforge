import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import GrayDownArrow from '@/assets/GrayDownArrow.svg';

const DropDown = ({ label, placeholder, dropdownList }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSelectedValue(newSearchTerm);
  };

  const handleDropdownItemClick = (item) => {
    setSelectedValue(item);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="">
      <label className="text-primary-text  text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>

      <div>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            name="text"
            placeholder={placeholder}
            value={selectedValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            readOnly
            className={`w-full cursor-pointer bg-white text-[0.9375rem] h-11 rounded py-[0.1rem] pl-[0.875rem] pr-[2.5rem]  mb-[0.25rem] text-primary-text border transition-field duration-[0.25s] ease-in-out-expo border-[#d7d7d7] focus:shadow-field focus:border-black outline-none`}
          />
          <div className="absolute top-[18px] right-[18px]">
            <Image src={GrayDownArrow} alt="search" className="w-[15px]" />
          </div>
          {isOpen && (
            <div className="rounded-lg overflow-hidden">
              <ul
                ref={dropdownRef}
                className="absolute bg-white border py-[3px] border-[#d7d7d7] rounded w-full max-h-[12.25rem] z-[10] overflow-y-auto">
                {dropdownList.map((item, index) => (
                  <li
                    onClick={() => handleDropdownItemClick(item)}
                    key={index}
                    className={`px-[0.875rem]  text-primary-text py-[8px] text-[1rem] leading-[130%] cursor-pointer hover:bg-gray-hover z-[100]`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
