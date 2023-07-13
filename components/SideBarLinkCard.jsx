import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SideBarLinkCard = ({
  logo,
  isActive,
  text,
  handleClick,
  rounded,
  link,
}) => {
  return (
    <Link href={`/${link}`} passHref>
      <div
        onClick={() => handleClick({ text })}
        className={`px-6 h-12 w-full   flex items-center relative cursor-pointer`}>
        <Image
          src={logo}
          alt="Home Logo"
          width={32}
          height={32}
          className={`h-6 w-6 ml-1 mr-4 z-10  ${rounded && 'rounded-full'}`}
        />
        <p className="text-sm leading-[130%] text-primary-text z-10">{text}</p>
        {isActive && (
          <>
            <div className="absolute left-0 w-1 h-full rounded-r-[8px] bg-primary-text"></div>
            <div className="absolute left-1 w-[91%] h-full rounded-r-[8px] bg-light-red"></div>
          </>
        )}
      </div>
    </Link>
  );
};

export default SideBarLinkCard;
