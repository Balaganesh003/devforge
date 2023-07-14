import React from 'react';
import Image from 'next/image';
import Avatar1 from '@/assets/avatar_default_0.png';
import Avatar2 from '@/assets/avatar_default_1.png';
import Avatar3 from '@/assets/avatar_default_2.png';
import Avatar4 from '@/assets/avatar_default_3.png';
import Avatar5 from '@/assets/avatar_default_4.png';
import Avatar6 from '@/assets/avatar_default_5.png';

const AvatarList = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6];

const CommentBox = ({ comment: { by, comment } }) => {
  return (
    <div className={`px-3 md:px-6  lg:px-8  text-ellipsis cursor-default`}>
      <div className="flex gap-3">
        <div className="flex flex-shrink-0 ">
          <Image
            src={AvatarList[Math.floor(Math.random() * AvatarList.length)]}
            width={32}
            height={32}
            alt="ProfilePhoto"
            className="w-9 h-9 rounded-full"
          />
        </div>
        <div className="w-full border border-[#d7d7d7] bg-[#fafafa] p-3 rounded-md">
          {/* Heading */}

          <h1 className="text-primary-text mb-2 text-[1rem] font-semibold leading-[130%] ">
            {by}
          </h1>
          {/* Description */}
          <div className="text-secondary-text leading-[1.375rem]  text-[0.875rem] font-normal break-words description max-w-[36.75rem] flex-shrink text-ellipsis ">
            {comment}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
