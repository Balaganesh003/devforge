import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcLock } from 'react-icons/fc';

const UpcomingStartupCard = () => {
  const [isLocked, setIsLocked] = useState(true);
  return (
    <div
      className={`border rounded-md border-[#d7d7d7] p-5 min-h-[10rem] relative`}>
      <p className="text-[1rem] leading-[1.7]">
        A platform to get continuous access to verified creator data
      </p>
      {isLocked && (
        <div
          onClick={() => setIsLocked(false)}
          className="w-full h-full absolute top-0 left-0 filter backdrop-blur-[10px] bg-white/5 rounded-md flex items-center justify-center  flex-col gap-3">
          <p className="text-[1rem] font-CabinetGrotesk-Bold text-center">
            Contribute to unlock unlimited free content!
          </p>
          <FcLock className="text-[2rem]" />
        </div>
      )}
    </div>
  );
};

export default UpcomingStartupCard;
