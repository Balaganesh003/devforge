import React, { useEffect } from 'react';
import FilterCard from '@/components/FilterCard';
import { useState } from 'react';
import Image from 'next/image';
import BlackDownTriangle from '@/assets/BlackDownTriangle.svg';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import SearchLogo from '@/assets/SearchLogo.svg';
import JobsAndCompaniesModal from './JobsModal';

const JobsPage = ({
  DropdownList,
  Filters,
  CardList,
  CardName,
  Heading,
  isDropDown,
}) => {
  const [selectedDropdown, setSelectedDropdown] = useState(
    isDropDown && DropdownList[0]
  );
  const [searchText, setSearchText] = useState('');
  const [showClearLogo, setShowClearLogo] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (searchText) {
      setShowClearLogo(true);
    } else {
      setShowClearLogo(false);
    }
  }, [searchText]);

  const clearSearchText = () => {
    setSearchText('');
    setShowClearLogo(false);
  };

  return (
    <div className="">
      <div className="w-full border-b sticky top-0 z-10 border-gray-border">
        <div className="h-full w-full max-w-[62.5rem] mx-auto border-b border-gray-border flex  bg-white items-center z-10">
          <div className="sm:max-w-[62.5rem]   overflow-x-auto flex  ">
            <div className="flex  flex-nowrap sm:flex-wrap">
              {Filters.map((filter) => (
                <FilterCard
                  key={filter.id}
                  name={filter.name}
                  link={`/user/jobs/${filter.name.toLowerCase()}`}
                />
              ))}
              {isDropDown && (
                <div className="px-[14.5px] ml-auto py-[6px] my-[4px] mr-[2px] border border-black rounded w-fit h-[35px] flex-shrink-0">
                  <p
                    onClick={() => setIsRecommended(!isRecommended)}
                    className="text-[0.875rem] leading-[150%] font-medium text-primary-text captilize cursor-pointer flex items-center gap-[7px] ">
                    <Image
                      src={selectedDropdown.logo}
                      alt="List Logo"
                      className="w-[14px] h-[14px] "
                    />
                    <span>{selectedDropdown.name}</span>
                    <Image
                      src={BlackDownTriangle}
                      alt="Black Down Triangle"
                      className="w-[14px] h-[14px] "
                    />
                  </p>
                  {isRecommended && (
                    <div className="bg-white w-[150px] absolute top-[50px] sm:top-[90px] right-2  py-1 rounded shadow-lg ">
                      <div className="">
                        {DropdownList.map((dropdown) => (
                          <div
                            onClick={() => [
                              setSelectedDropdown(dropdown),
                              setIsRecommended(false),
                            ]}
                            key={dropdown.id * 99}
                            className="flex items-center gap-[7px] px-[14px] py-[5px] cursor-pointer hover:bg-gray-hover w-full ">
                            <Image
                              src={dropdown.logo}
                              alt="Black Tick"
                              className="w-[16px] h-[16px] "
                            />
                            <span className="text-[0.875rem] leading-[22px]">
                              {dropdown.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[62.5rem] w-full min-h-screen h-full mx-auto  mt-5 z-0">
        {/* Search Field */}
        <div className="w-full mobile-lg:px-3 lg:px-0 h-[50px] rounded-md relative z-0 mb-[15px]">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full h-full focus:outline-none bg-white px-12 border border-gray-border focus:border-black rounded-md"
          />
          <Image
            src={SearchLogo}
            alt="Search Logo"
            className="absolute top-1/2 transform -translate-y-1/2 left-4 w-[16px] h-[16px]"
          />

          <Image
            src={CrossLogoWhite}
            onClick={clearSearchText}
            alt="Cross Logo"
            className={`absolute top-1/2 transform scale-0 -translate-y-1/2 right-7 w-[16px] h-[16px] bg-black/20 p-1 rounded-full cursor-pointer ${
              showClearLogo ? 'scale-100 ' : 'scale-0 '
            } transition-all duration-300`}
          />
        </div>
        {/* Cards section */}
        <div className="p-[0.9375rem] border border-gray-border rounded bg-white h-full">
          <p className="uppercase text-[0.8125rem] leading-[1.125rem] text-secondary-text font-medium mb-[15px]">
            {Heading}
          </p>
          <div className="grid grid-cols-1 mobile-lg:grid-cols-3 gap-[0.9375rem]  ">
            {CardList.map((card) => (
              <CardName
                key={card?.id}
                role={card?.role}
                company={card?.company}
                location={card?.location}
                remote={card?.remote}
                type={card?.type}
                logo={card?.logo}
                no_of_applicants={card?.no_of_applicants}
                no_events={card?.no_events}
                no_jobs={card?.no_jobs}
                stage={card?.stage}
                employees={card?.employees}
                setIsModalOpen={setIsModalOpen}
                wholeCard={card}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}

      <JobsAndCompaniesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      {/* Modal End */}
    </div>
  );
};

export default JobsPage;
