import { Inter } from 'next/font/google';
import ImpactLogo from '@/assets/impactLogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import Label1 from '@/assets/label1.svg';
import Label2 from '@/assets/label2.svg';
import Arrow from '@/assets/arrow.svg';

const inter = Inter({
  subsets: ['latin'],
});

export default function User() {
  return (
    <div>
      <div className="w-full h-[200px] bg-white border-b border-[#d7d7d7]"></div>
      <div
        className={`${inter.className} block w-full my-[3.25rem] mobile-xl:max-w-[64rem]    px-2 mobile-md:px-4 mobile-xl:px-6 md:px-8 mx-auto`}>
        <div className="grid max-w-[313px] mx-auto  grid-cols-1 mobile-xl:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-6  mt-[3.5rem] mobile-xl:max-w-[650px] md:max-w-none  w-full">
          <div className="grid w-full col-span-1  grid-rows-3 row-span-3 gap-6">
            <div className=" col-span-1 row-span-2">
              {/* 1st element */}
              <div className="flex bg-white flex-col rounded-[10px] overflow-hidden border border-[#d7d7d7] min-h-[24rem] w-full h-full">
                <div className="basis-[42%] p-4 bg-[#F8EEE4] border-b border-[#d7d7d7] flex flex-col items-center justify-center relative">
                  <p className=" text-[3rem] leading-[0.9] font-CabinetGrotesk-Medium text-[#DE6D61] ">
                    156
                  </p>
                  <p className="text-[#EF7B56] text-[1rem]">
                    Students impacted
                  </p>
                  <div className="w-[4rem] h-[4rem] bg-white border rounded-md absolute bottom-0 translate-y-1/2 left-[10%] flex items-center justify-center">
                    <Image src={ImpactLogo} alt="Impact Logo" />
                  </div>
                </div>
                <div className="basis-[58%] bg-white p-6 pt-[3.5rem] flex flex-col justify-between">
                  <p className="text-[15px] leading-[1.9rem] tracking-[-0.02rem] ">
                    It&lsquo;s your turn to take one step closer to your dream
                    career with work experience
                  </p>
                  <Link
                    href="/user/impact"
                    className="text-[#3870DD] tracking-tight">
                    Explore WorkEx Programs
                  </Link>
                </div>
              </div>
            </div>
            {/* 2nd element */}
            <div className="p-6 min-h-[11.25rem]  rounded-md col-span-1 row-span-1 border border-[#d7d7d7] bg-red-200">
              <p className="text-[15px] h-full leading-[1.75rem] tracking-[-0.015rem] p-4 bg-white rounded-md flex items-center justify-center">
                <span>
                  No company wants your certificate but every company wants your
                  work experience
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-1  mx-auto row-span-3 min-h-[37.5rem] ">
            {/* 3rd element */}
            <Link href="/user/startup">
              <div className="flex bg-white flex-col cursor-pointer overflow-hidden  rounded-[10px]  border border-[#d7d7d7]  w-full h-full  relative">
                <h1 className="text-[2.75rem] pt-11 px-6  font-CabinetGrotesk-Medium text-[#9260FF] leading-[1.25]">
                  Your dream companies
                </h1>
                <p className="text-[15px] leading-[2rem] p-6 tracking-[0.02rem] ">
                  Here are some of the top tech companies you can break into
                  with the power of work experience and magic of referrals
                </p>
                <div className="absolute bottom-0 -left-1  border-collapse ">
                  <Image src={Label2} alt="Label 1" className="" />
                </div>
                <div className="absolute bottom-1 -right-1 -left-1 border-collapse ">
                  <Image src={Label1} alt="Label 1" className="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="grid mobile-xl:col-span-2 mobile-xl:grid-cols-2 md:col-span-1 md:grid-cols-1 md:grid-rows-2 md:row-span-3 gap-6  ">
            <div className="bg-[#DBE6EC] col-span-1 row-span-1 p-6 rounded-lg text-[#00679D] border boder-[#d7d7d7] ">
              <div className="bg-white w-full h-full rounded-lg text-[2rem] p-6 flex justify-center items-center ">
                <p className=" break-words font-CabinetGrotesk-Medium ">
                  A recap of dream
                  <Link href="/user/referrals" className="ml-2">
                    <Image
                      src={Arrow}
                      alt="Arrow"
                      className="inline-block ml-2"
                    />
                  </Link>
                  opportunities
                </p>
              </div>
            </div>
            <div className="bg-white col-span-1 row-span-1 p-6 rounded-lg border  border-[#d7d7d7]">
              <div className="bg-[#F1FBF9] text-[#014552] font-CabinetGrotesk-Medium p-4 rounded-md text-[2rem]">
                1st September
              </div>
              <div className="text-[15px] pt-6 leading-[1.9rem]">
                Is the earliest date you can start working with companies to
                gain work experience as a part of WorkEx Programs
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-6">
          <div className="flex w-full gap-6 flex-col md:flex-row">
            <div className="p-6 basis-[46%] border rounded-[10px] border-[#d7d7d7] w-full ">
              <div className="flex min-h-[120px] ">
                <div className="flex items-center flex-col justify-center bg-[#DAEFF4] p-4 basis-[43%] rounded-l-[10px]">
                  <h1 className="text-[2.25rem] leading-[45px] text-[#004C5B] font-CabinetGrotesk-Medium uppercase tracking-normal">
                    8 LPA
                  </h1>
                  <p className="font-sans text-[0.875rem] leading-[17px] tracking-[-0.015rem] uppercase text-[#004C5B]">
                    LOWEST CTC
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 basis-[57%] rounded-r-[10px] bg-[#01B9C1] text-white">
                  <h1 className="text-[2.25rem] w-fit text-center leading-[45px]  font-CabinetGrotesk-Medium uppercase tracking-normal">
                    2 CR
                  </h1>
                  <p className="font-sans text-[0.875rem] w-fit text-center leading-[17px] tracking-[-0.015rem] uppercase ">
                    HIGHEST CTC
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-[20px] leading-[1.25] font-CabinetGrotesk-Medium tracking-[-0.02rem] ">
                  Dream Placement Hiring Challenge
                </p>
              </div>
              <Link
                href="/user/"
                className="text-[#3870DD] text-[1rem] block leading-[20px] mt-4">
                Register Now
              </Link>
            </div>
            <div className="p-6 basis-[54%] border rounded-[10px] border-[#d7d7d7] w-full bg-[#01B9C1] ">
              <div className="flex h-full ">
                <div className="pr-6">
                  <p className="text-[2.25rem] leading-[45px] text-white font-CabinetGrotesk-Bold">
                    1st
                  </p>
                  <p className="text-[18px] leading-[23px] font-CabinetGrotesk-Regular text-white">
                    Sep
                  </p>
                </div>
                <div className="bg-white p-4 text-[1rem] leading-[1.7] w-full text-[#014552] h-full rounded-[10px]">
                  Is the earliest date you can start working with companies to
                  gain work experience as a part of WorkEx Programs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
