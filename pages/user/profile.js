import React, { useState } from 'react';
import LogoRank from '@/assets/rank.svg';
import LogoBadge from '@/assets/badge.svg';
import LogoCoin from '@/assets/coin.svg';
import Image from 'next/image';
import PencilLogo from '@/assets/pencil.svg';
import LogoTwitter from '@/assets/twitter.svg';
import LogoLinkedin from '@/assets/linkedin.svg';
import LogoGithub from '@/assets/github.svg';
import LogoInstagram from '@/assets/instagram.svg';
import LogoTelegram from '@/assets/telegram.svg';
import LogoMedium from '@/assets/medium.svg';
import LogoYoutube from '@/assets/youtube.svg';
import LogoTiktok from '@/assets/tiktok.svg';
import LogoDribble from '@/assets/dribble.svg';
import LogoBehance from '@/assets/behance.svg';
import LogoMailStar from '@/assets/mailstar.svg';
import LogoEducation from '@/assets/education.svg';
import ProfileModal from '@/components/ProfileModal';
import ProfileModalLayout from '@/components/ProfileModalLayout';
import SocialLinksModal from '@/components/SocialLinkModal';

const Profile = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSocialLinksModal, setShowSocialLinksModal] = useState(false);

  return (
    <div>
      <div className="h-[200px] w-full bg-white border-b border-[#d7d7d7]"></div>
      <div className="block  mobile-lg:max-w-[64rem] w-full    px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8  my-[3.5rem] mx-auto ">
        <div className="grid grid-cols-1  mobile-lg:grid-cols-5  mobile-lg:grid-rows-3  md:grid-cols-7  md:grid-rows-2 gap-6 ">
          {/* Profile header */}
          <div className="w-full   mobile-lg:col-span-5 row-span-1 bg-white rounded-[10px] p-6 flex gap-6 flex-col mobile-lg:flex-row items-center mobile-lg:items-start border border-[#d7d7d7] relative">
            <div className="w-[6rem] h-[6rem] flex-shrink-0 bg-gray-400 border border-[#d7d7d7] rounded-[10px]"></div>
            <div className="text-center mobile-lg:text-left">
              <h4 className="text-[1.5rem] font-CabinetGrotesk-Medium">Name</h4>
              <p className="text-[1rem] leading-[1.9rem]">
                @gabriellac • New York, NY, USA • she/her
              </p>
              <p className="text-[1rem] leading-[1.9rem]">
                A startup enthusiast exploring creator economy
              </p>
              {/* Edit */}
              <button
                onClick={() => setShowProfileModal(true)}
                className="absolute right-5 top-5">
                <Image src={PencilLogo} alt="edit" width={24} height={24} />
              </button>
            </div>
          </div>

          <div className="w-full mobile-lg:col-span-2 mobile-lg:row-span-1 p-6 border rounded-[10px] border-[#d7d7d7]  flex items-center justify-center bg-white ">
            <div className="flex flex-col w-full items-center justify-center">
              <Image src={LogoRank} alt="rank" width={84} height={84} />
              <p className="text-[#3870DD] text-[1rem] text-center">
                Rank yet to achive
              </p>
            </div>
          </div>
          <div className="w-full grid-cols-1  mobile-lg:col-span-3 mobile-lg:row-span-2 md:row-span-1 md:col-span-5 gap-6 grid grid-rows-2 md:grid-rows-1 md:grid-cols-10 ">
            {/* Social links */}
            <div className=" p-6 md:col-span-4 bg-white border rounded-[10px] border-[#d7d7d7] relative">
              <h4 className="text-[1.5rem] font-CabinetGrotesk-Medium">
                Social
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-4 mt-3">
                <div>
                  <Image src={LogoTwitter} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoTelegram} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image
                    src={LogoInstagram}
                    alt="rank"
                    width={28}
                    height={28}
                  />
                </div>
                <div>
                  <Image src={LogoLinkedin} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoMedium} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoYoutube} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoDribble} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoGithub} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoBehance} alt="rank" width={28} height={28} />
                </div>
                <div>
                  <Image src={LogoTiktok} alt="rank" width={28} height={28} />
                </div>
              </div>
              {/* Edit */}
              <button
                onClick={() => setShowSocialLinksModal(true)}
                className="absolute right-5 top-5">
                <Image src={PencilLogo} alt="edit" width={24} height={24} />
              </button>
            </div>
            <div className="p-6 md:col-span-6  bg-white border rounded-[10px] items-center flex gap-[2%] border-[#d7d7d7]">
              <Image src={LogoBadge} alt="rank" width={96} height={96} />
              <p className="text-[#FF8D1F] text-[1rem] leading-[1.5]">
                You haven’t earned any badges yet
              </p>
            </div>
          </div>
          <div className=" mobile-lg:col-span-2 bg-white w-full p-6 border rounded-[10px] border-[#d7d7d7]">
            <div className="flex flex-col w-full h-full items-center justify-center">
              <Image src={LogoCoin} alt="rank" width={152} height={152} />
            </div>
          </div>
        </div>
        {/* 2nd row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="p-6 w-full bg-white border border-[#d7d7d7] rounded-[10px]">
            <h4 className="text-[2rem] font-CabinetGrotesk-Regular leading-[3rem]">
              256
            </h4>
            <p className="text-[1rem] leading-[1] text-[#666C7E] mt-3">
              IT Scrore
            </p>
          </div>
          <div className="p-6 w-full bg-white border border-[#d7d7d7] rounded-[10px]">
            <h4 className="text-[2rem] font-CabinetGrotesk-Regular leading-[3rem]">
              124
            </h4>
            <p className="text-[1rem] leading-[1] text-[#666C7E] divide-[#666C7E] mt-3 flex divide-x-[1.5px]  gap-1">
              <span>PR &</span>
              <span className="pl-1">Score</span>
            </p>
          </div>
          <div className="p-6 w-full bg-white border border-[#d7d7d7] rounded-[10px]">
            <h4 className="text-[2rem] font-CabinetGrotesk-Regular  leading-[3rem]">
              $1,000
            </h4>
            <p className="text-[1rem] leading-[1] text-[#666C7E] mt-3">
              Fellowship won
            </p>
          </div>
          <div className="p-6 w-full bg-white border border-[#d7d7d7] rounded-[10px]">
            <h4 className="text-[2rem] font-CabinetGrotesk-Regular leading-[3rem]">
              $100
            </h4>
            <p className="text-[1rem] leading-[1] text-[#666C7E] mt-3">
              Subscriptions won
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="w-full flex flex-col mobile-lg:flex-row gap-6 p-6 bg-white border border-[#d7d7d7] mt-6 rounded-[10px] relative">
          <div className="flex-shrink-0 w-full mobile-lg:w-fit flex justify-center">
            <Image
              src={LogoEducation}
              alt="rank"
              width={96}
              height={96}
              className=""
            />
          </div>
          <div className="w-full">
            <h4 className="text-[1.125rem]  ">Education</h4>
            <h4 className="text-[1.25rem] mt-2 font-CabinetGrotesk-Bold ">
              University of California - Berkeley
            </h4>
            <p className="text-[0.875rem]  mt-1">
              Bachelor of Science (BS) in Computer Engineering | Spring 2023
            </p>
            <p className="text-[0.875rem]">
              Minor in Artificial Intelligence and Robotics
            </p>
          </div>
          {/* Edit */}
          <button className="absolute right-5 top-5">
            <Image src={PencilLogo} alt="edit" width={24} height={24} />
          </button>
        </div>
        {/* 4th row */}
        <div className="p-[3rem] bg-white border border-[#d7d7d7] rounded-[10px] mt-6 flex items-end justify-center">
          <div className="flex flex-col items-center">
            <Image src={LogoMailStar} alt="rank" width={96} height={96} />
            <h4 className="text-[1.5rem] text-center font-CabinetGrotesk-Medium  mt-4">
              No verified recommendations received yet
            </h4>
            <p className="text-center text-[0.875rem] mt-5 max-w-[64ch] leading-[1.5rem] text-[#666C7E]">
              Let companies speak about the skills/performance you demonstrated
              and work you delivered. Let your participation in virtual
              internship challenges/hackathons/ competitions showcase your
              skills and accomplishments
            </p>
          </div>
        </div>
      </div>
      {/* Profile Modal */}
      <ProfileModalLayout
        label={'Edit Basic Info'}
        setIsModalOpen={setShowProfileModal}
        isModalOpen={showProfileModal}>
        <ProfileModal />
      </ProfileModalLayout>

      <SocialLinksModal
        label={'Edit Social Links'}
        setIsModalOpen={setShowSocialLinksModal}
        isModalOpen={showSocialLinksModal}
      />
    </div>
  );
};

export default Profile;
