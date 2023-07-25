import React from 'react';
import JobsAndCompanies from '@/components/JobsAndCompanies';
import CanalLogo from '@/assets/CanalLogo.png';
import DegreedLogo from '@/assets/degreedLogo.png';
import DiscordLogo from '@/assets/DiscordLogo.jpeg';
import ListLogo from '@/assets/ListLogo.svg';
import ClockLogo from '@/assets/ClockLogo.svg';
import BookmarkLogo from '@/assets/BookmarkLogo.svg';
import BlackTick from '@/assets/BlackTick.svg';
import JobsCard from '@/components/JobsCard';

const JobsFilter = [
  {
    id: 1,
    name: 'Location',
  },
  {
    id: 2,
    name: 'Stage',
  },
  {
    id: 3,
    name: 'Industry',
  },
  {
    id: 4,
    name: 'Company',
  },
  {
    id: 5,
    name: 'Job Title',
  },
  {
    id: 6,
    name: 'Experience Level',
  },
  {
    id: 7,
    name: 'ERGs',
  },
  {
    id: 8,
    name: 'Values',
  },
  {
    id: 9,
    name: 'Remote Culture',
  },
  {
    id: 10,
    name: 'Benefits',
  },
  {
    id: 11,
    name: 'Salary',
  },
];

const RecommendedDropdown = [
  {
    id: 1,
    name: 'Recommended',
    logo: ListLogo,
  },
  {
    id: 2,
    name: 'Newest',
    logo: ClockLogo,
  },
  {
    id: 3,
    name: 'Applied',
    logo: BlackTick,
  },
  {
    id: 4,
    name: 'Saved',
    logo: BookmarkLogo,
  },
];

const JobsList = [
  {
    id: 1,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
    posted_on: '2023-04-20T04:05:25.008Z',
  },
  {
    id: 2,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 100,
    posted_on: '2023-05-20T04:05:25.008Z',
  },
  {
    id: 3,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 50,
    posted_on: '2023-06-20T04:05:25.008Z',
  },
  {
    id: 4,
    role: 'Senior Software Engineer - Front End - Bengaluru',
    company: 'Degreed',
    location: 'Bengaluru, Ka',
    type: 'Full Time',
    remote: true,
    logo: DegreedLogo,
    no_of_applicants: 12,
    posted_on: '2023-01-20T04:05:25.008Z',
  },
  {
    id: 5,
    role: 'Product Engineering Intern - Design Systems',
    company: 'Discord',
    location: 'San Framcosco, CA',
    type: 'Internship',
    remote: true,
    logo: DiscordLogo,
    no_of_applicants: 10,
    posted_on: '2023-02-20T04:05:25.008Z',
  },
  {
    id: 6,
    role: 'Senior Frontend Software Engineer',
    company: 'Canal',
    location: 'San Framcosco, CA',
    type: 'Full Time',
    remote: true,
    logo: CanalLogo,
    no_of_applicants: 3,
    posted_on: '2023-03-20T04:05:25.008Z',
  },
];

const Jobs = () => {
  return (
    <div>
      <JobsAndCompanies
        DropdownList={RecommendedDropdown}
        Filters={JobsFilter}
        CardList={JobsList}
        CardName={JobsCard}
        Heading="YOUR TOP JOB MATCHES ON UNTAPPED"
        isDropDown={true}
      />
    </div>
  );
};

export default Jobs;
