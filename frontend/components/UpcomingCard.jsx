import Image from 'next/image';
import React from 'react';

const UpcomingCard = ({ isImage, imageUrl, title, subtitle, month, date }) => {
  return (
    <div className="flex items-center mb-[15px]">
      <div className="w-[2.5rem] justify-center items-center h-[2.5rem] mr-[0.625rem] flex flex-col flex-shrink-0">
        {isImage && imageUrl ? (
          <Image
            src={imageUrl && imageUrl}
            priority={true}
            width={40}
            height={40}
            className="w-full h-full rounded-lg flex-shrink-0"
            alt="logo"
          />
        ) : (
          <>
            <span className="text-[0.75rem] leading-[0.75rem] text-text-red">
              {month}
            </span>
            <span className="text-[1.0625rem] leading-[0.1.0625rem]">
              {date}
            </span>
          </>
        )}
      </div>
      <div>
        <p className="text-[0.875rem] leading-[0.875rem] text-secondary-text font-medium">
          {title}
        </p>
        <p className="text-[0.75rem]  text-gray-text mt-[0.3125rem]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default UpcomingCard;
