import React, { useState, useRef, useEffect } from 'react';

const DropDown = ({
  label1,
  selectedValue,
  setSelectedValue,
  placeholder,
  dropdownList,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
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
    <div className="w-full">
      <p
        className={`text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]`}>
        {label1}
      </p>

      <div>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            name="text"
            placeholder={placeholder}
            value={searchTerm || selectedValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onKeyDown={handleInputKeyDown}
            className={`w-full text-[1rem] bg-white h-12 rounded py-[0.1rem] px-[0.875rem]   mb-[0.25rem]  text-primary-text border border-light-gray focus:outline-black`}
          />

          {isOpen && (
            <div className="rounded-lg overflow-hidden">
              <div
                ref={dropdownRef}
                className="absolute bg-white border py-[3px] border-light-gray rounded w-full  z-[10] ">
                {dropdownList.map((item, index) => (
                  <p
                    onClick={() => handleDropdownItemClick(item)}
                    key={index}
                    className="px-[0.875rem] text-primary-text py-[8px] text-[1rem] leading-[130%] cursor-pointer hover:bg-gray-hover z-[100]">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
