import React from 'react';
import MailLogo from '@/assets/mail.svg';
import BulbLogo from '@/assets/bulb.svg';
import Image from 'next/image';
import UpcomingStartupCard from '@/components/UpcomingStartupCard';

const Startup = () => {
  return (
    <div className="block  mobile-lg:max-w-[64rem] w-full    px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 py-8 mt-[10rem] mx-auto ">
      <div className="w-full flex  flex-col md:flex-row gap-6 font-CabinetGrotesk-Medium">
        <div className="basis-[25%] flex gap-6 flex-col mobile-lg:flex-row md:flex-col flex-shrink-0">
          <div className="basis-[75%] border border-[#d7d7d7] bg-[#F8EEE4E4] text-[#DE6D61] p-6 leading-[1.9rem] text-[1.125rem] rounded-[10px]">
            If you&lsquo;re offered a seat on a rocket ship, don&lsquo;t ask
            what seat!
          </div>
          <div className="basis-[25%]  p-5 border border-[#d7d7d7] rounded-[10px] bg-[#DBE6EC] text-[#004C5B] text-[1.125rem] flex items-center justify-center">
            <div className="p-3 h-full bg-white rounded-md w-full">
              #beapartofthenextbigthing
            </div>
          </div>
        </div>
        <div className="basis-[75%] border bg-white border-[#d7d7d7] rounded-[10px] p-6 flex-1">
          <h4 className="text-[2rem] mb-2">
            It&lsquo;s time to meet startups!
          </h4>
          <p className="font-sans text-[1rem]">
            As a platform aimed at redefining the way, students learn new skills
            and upskill with work experience we intend to provide complete
            transparency by matching students with startups based on their
            interest, problem solving skills and creativity approach towards an
            idea.
          </p>
          <p className="font-sans pt-6">
            Get matched to startups working on the next big thing.
          </p>
        </div>
      </div>
      {/* 2nd element */}
      <div className="w-full   border border-[#d7d7d7] bg-white rounded-[10px] p-10 mt-6">
        <div className="w-full flex items-center justify-center flex-col">
          <Image src={MailLogo} alt="mail logo" />
          <p className="mt-4 pb-2 text-[1rem] text-center">
            You don&lsquo;t have any invites yet as you haven&lsquo;t completed
            any assignments.
          </p>
        </div>
      </div>
      <div className="w-full bg-white  border border-[#d7d7d7] rounded-[10px] p-6 mt-6">
        <h4 className=" font-CabinetGrotesk-Medium text-[1.5rem] mb-4 tracking-tight text-[#3870DD]">
          Upcoming Startup Calls
        </h4>
        <div className="grid mobile-lg:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          <UpcomingStartupCard />
          <UpcomingStartupCard />
          <UpcomingStartupCard />
        </div>
      </div>
      <div className="w-full bg-white flex gap-6  border border-[#d7d7d7] rounded-[10px] px-6 items-center py-5 mt-6">
        <Image src={BulbLogo} alt="bulb logo" className="flex-shrink-0" />
        <p className="text-[1rem]">
          Showcase your problem solving approach by completing assignments to
          participate in Startup Calls
        </p>
      </div>
    </div>
  );
};

export default Startup;
