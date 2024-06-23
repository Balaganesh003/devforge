import React, { useState } from 'react';
import Image from 'next/image';
import Completed from '@/assets/completed.svg';

const ProgressCard = ({ referral }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="border-b border-[#d7d7d7] last:border-none  duration-500">
      <div
        onClick={() => setShow(!show)}
        className="flex border-b cursor-pointer border-[#d7d7d7] last:border-none last:rounded-b-[12px] justify-between gap-3 bg-white p-4">
        <div className="flex gap-2">
          <Image
            src={referral.logo}
            alt="google"
            className="w-[3rem] h-[3rem] object-cover "
          />
          <div>
            <p className="text-[1rem] font-semibold">{referral.position}</p>
            <p className="text-[14px]">{referral.name}</p>
          </div>
        </div>
        <div className="text-[0.875rem]">{referral.date}</div>
      </div>
      {show && (
        <div className="p-2 flex flex-col mobile-xl:flex-row w-full gap-2 text-[#666666]">
          <div className="w-full p-4 pt-8 bg-white border rounded shadow-card">
            <p className="text-[1.125rem] font-semibold text-black">
              Users Profile Progress
            </p>
            <div className="flex justify-between items-center gap-2 mt-3">
              <div className="uppercase px-2 py-1 text-[12px] font-semibold bg-[#BFDBFE] text-[#3365E6] rounded-full leading-[1.5]">
                PROFILE completed
              </div>
              <div className="text-[#3365e6] text-[12px] leading-[1.5] font-semibold">
                {referral.progress}%
              </div>
            </div>
            <div className="w-full h-[8px] bg-[#BFDBFE] rounded-full mt-2 relative">
              <div
                className={`before:absolute before:left-0 before:top-0  before:h-[8px] before:bg-[#3365e6] before:rounded-full ${referral.progressCSS}`}></div>
            </div>
          </div>
          <div className="border w-full rounded overflow-hidden border-[#d7d7d7] shadow-card">
            <div className="bg-white border-b rounded-t border-[#d7d7d7]">
              <div className="flex px-4 py-2 items-center gap-4">
                <div className="w-5 h-5 border border-[#d7d7d7] rounded-full">
                  <Image src={Completed} alt="tick" className="rounded-full" />
                </div>

                <span className="text-[#383838] text-[12px] font-semibold">
                  Sign up completed
                </span>
              </div>
            </div>
            <div className="bg-[#F9FAFB] border-b  border-[#d7d7d7]">
              <div className="flex px-4 py-2 items-center gap-4">
                <div className="w-5 h-5 border border-[#d7d7d7] rounded-full">
                  {/* <Image
                              src={Completed}
                              alt="tick"
                              className="rounded-full"
                            /> */}
                </div>

                <span className="text-[#383838] text-[12px] font-semibold">
                  Complete your profile page
                </span>
              </div>
            </div>
            <div className="bg-[#F9FAFB] border-b border-[#d7d7d7]">
              <div className="flex px-4 py-2 items-center gap-4">
                <div className="w-5 h-5 border border-[#d7d7d7] rounded-full">
                  {/* <Image
                              src={Completed}
                              alt="tick"
                              className="rounded-full"
                            /> */}
                </div>

                <span className="text-[#383838] text-[12px] font-semibold">
                  Complete personal assessment
                </span>
              </div>
            </div>
            <div className="bg-[#F9FAFB] border-b border-[#d7d7d7]">
              <div className="flex px-4 py-2 items-center gap-4">
                <div className="w-5 h-5 border border-[#d7d7d7] rounded-full">
                  {/* <Image
                              src={Completed}
                              alt="tick"
                              className="rounded-full"
                            /> */}
                </div>

                <span className="text-[#383838] text-[12px] font-semibold">
                  Apply, Participate & Compete
                </span>
              </div>
            </div>
            <div className="bg-[#F9FAFB] ">
              <div className="flex px-4 py-2 items-center gap-4">
                <div className="w-5 h-5 border border-[#d7d7d7] rounded-full">
                  {/* <Image
                              src={Completed}
                              alt="tick"
                              className="rounded-full"
                            /> */}
                </div>

                <span className="text-[#383838] text-[12px] font-semibold">
                  Improve user rankings
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressCard;
