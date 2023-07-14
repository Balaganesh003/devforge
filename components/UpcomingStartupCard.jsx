import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

const UpcomingStartupCard = () => {
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div
      className={`border rounded-md border-[#d7d7d7] p-5 min-h-[10rem] relative`}>
      <p className="text-[1rem] leading-[1.75rem]">
        A platform to get continuous access to verified creator data
      </p>
      {isLocked && (
        <div
          onClick={() => setIsLocked(false)}
          className="w-full h-full absolute top-0 left-0 filter backdrop-blur-[4px] bg-white/5 rounded-md flex items-center justify-center ">
          <Image
            src={
              'https://pixlok.com/wp-content/uploads/2021/12/Lock-Icon-SVG-03kdg.png'
            }
            width={50}
            height={50}
            alt="Lock Logo"
          />
        </div>
      )}
    </div>
  );
};

export default UpcomingStartupCard;
