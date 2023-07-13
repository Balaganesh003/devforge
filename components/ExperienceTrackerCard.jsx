import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const ExperienceTrackerCard = ({ companyName, url, role, experience }) => {
  return (
    <div className="bg-primary flex p-[0.9375rem] hover:border-primary-text duration-200 gap-[15px] border rounded-lg">
      <p className="flex flex-1 truncate items-center">
        <span className="truncate text-ellipsis">{companyName}</span>
        <Link href={url || '#'} target="_blank">
          <ExternalLink
            className="inline-block ml-[4px] cursor-pointer"
            size={20}
          />
        </Link>
      </p>
      <p className=" flex-1">{role}</p>
      <p className=" flex-1">{experience}</p>
    </div>
  );
};

export default ExperienceTrackerCard;
