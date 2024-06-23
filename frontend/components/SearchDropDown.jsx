import React, { useState, useRef, useEffect } from 'react';
import BlackSearchLogo from '@/assets/BlackSearchLogo.svg';
import Image from 'next/image';

const SearchDropDown = ({
  label1,
  label2,
  marginBottomLabel1,
  placeholder,
  dropdownList,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const filteredList = dropdownList?.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    const newFilteredList = dropdownList?.filter((item) =>
      item.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    setIsOpen(newFilteredList.length > 0);
    setSearchTerm(newSearchTerm);
    setSelectedValue('');
  };

  const handleDropdownItemClick = (item) => {
    setSearchTerm(item);
    setSelectedValue(item);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    inputRef.current.select();
  };

  const handleInputKeyDown = (event) => {
    if (event.key === 'Backspace') {
      if (selectedValue !== '') {
        setSelectedValue(selectedValue.slice(0, -1));
      }
    }
  };

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <strong key={index} className="text-[#0e0e0e] font-semibold">
          {part}
        </strong>
      ) : (
        part
      )
    );
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
      <p
        className={`text-[#0e0e0e] text-[0.875rem]  ${
          marginBottomLabel1 ? marginBottomLabel1 : 'mb-[10px]'
        } font-semibold`}>
        {label1}
      </p>
      {label2 && (
        <p className="text-secondary-text text-[0.875rem] font-nomarl mb-[15px]">
          {label2}
        </p>
      )}
      <div>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            name="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleInputKeyDown}
            className={`w-full  bg-white text-[0.9375rem] h-11 rounded py-[0.1rem] pl-[0.875rem] pr-[2.5rem]  mb-[0.25rem]  text-primary-text border border-[#d7d7d7] focus:outline-black`}
          />
          <div className="absolute top-[14px] right-3">
            <Image
              src={BlackSearchLogo}
              alt="search"
              className="h-[1.25rem] w-[1.25rem]"
            />
          </div>
          {isOpen && (
            <div className="rounded-lg overflow-hidden">
              <ul
                ref={dropdownRef}
                className="absolute bg-white border py-[3px] border-[#d7d7d7] rounded w-full max-h-[12.25rem] z-[10] overflow-y-auto">
                {filteredList.map((item, index) => (
                  <li
                    onClick={() => handleDropdownItemClick(item)}
                    key={index}
                    className="px-[0.875rem] text-primary-text py-[8px] text-[1rem] leading-[130%] cursor-pointer hover:bg-gray-hover z-[100]">
                    {item != selectedValue
                      ? getHighlightedText(item, searchTerm)
                      : item}
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

export default SearchDropDown;
