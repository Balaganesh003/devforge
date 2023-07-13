import Link from 'next/link';
import React from 'react';

const FilterCard = ({
  name,
  link,
  companyId,
  currentActive,
  setcurrentActive,
}) => {
  return (
    <Link
      className="flex-shrink-0"
      onClick={() => setcurrentActive(link)}
      href={`/user/companies/${companyId}/${link == '/' ? '' : link}`}>
      <div
        className={`px-[14.5px] flex-shrink-0 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px] ${
          currentActive === link && ' bg-black'
        }`}>
        <p
          className={`text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer ${
            currentActive === link && ' text-white'
          }`}>
          {name}
        </p>
      </div>
    </Link>
  );
};

export default FilterCard;
