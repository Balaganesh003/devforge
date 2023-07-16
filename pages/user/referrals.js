import ReferralsCard from '@/components/ReferralsCard';
import React from 'react';
import GoogleLogo from '@/assets/google.svg';
import Image from 'next/image';

const referralsData = [
  {
    id: 1,
    name: 'Google',
    logo: GoogleLogo,
    position: 'Software Engineer',
    link: 'https://google.com',
    date: 'July 3,2021',
  },
  {
    id: 2,
    name: 'Google',
    logo: GoogleLogo,
    position: 'Talent Acquisition Coordinator',
    link: 'https://google.com',
    date: 'July 13,2021',
  },
];

const Proofs = () => {
  return (
    <div>
      <div className="w-full h-[140px] bg-white flex items-center justify-center">
        <p className="text-[1.5rem] font-bold ">Referrals</p>
      </div>
      <div className="max-w-[62.5rem]  px-4 md:px-6 lg:px-8 py-8">
        <div className=" max-w-[640px] mx-auto">
          <ReferralsCard />
          <div className="mt-8">
            <h1 className="text-[1.5rem] font-semibold ">
              Application{' '}
              <span className="text-[#687280]">({referralsData.length})</span>
            </h1>
            <div className=" border border-[#d7d7d7] rounded-[12px] mt-6">
              <div className="px-5 w-full border-b border-[#d7d7d7] flex items-center  rounded-t-[12px] justify-between h-10 text-[12px] bg-[#F9FAFB]">
                <p>Position</p>
                <p>Date Applied</p>
              </div>
              {/*  */}
              {referralsData.map((referral, i) => (
                <div
                  key={i}
                  className="flex border-b border-[#d7d7d7] last:border-none last:rounded-b-[12px] justify-between gap-3 bg-white p-4">
                  <div className="flex gap-2">
                    <Image
                      src={GoogleLogo}
                      alt="google"
                      className="w-[3rem] h-[3rem] object-cover "
                    />
                    <div>
                      <p className="text-[1rem] font-semibold">
                        {referral.position}
                      </p>
                      <p className="text-[14px]">{referral.name}</p>
                    </div>
                  </div>
                  <div className="text-[0.875rem]">{referral.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proofs;
