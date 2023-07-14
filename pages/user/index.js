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
    <div
      className={`${inter.className} block w-full  mobile-xl:max-w-[64rem]    px-2 mobile-md:px-4 mobile-xl:px-6 md:px-8 mx-auto`}>
      <div className="grid max-w-[313px] mx-auto  grid-cols-1 mobile-xl:grid-cols-2 md:grid-cols-3 md:grid-rows-3 gap-6  mt-[6.4rem] mobile-xl:max-w-[650px] md:max-w-none pb-[3rem] w-full">
        <div className="grid w-full col-span-1  grid-rows-3 row-span-3 gap-6">
          <div className=" col-span-1 row-span-2">
            {/* 1st element */}
            <div className="flex bg-white flex-col rounded-[10px] overflow-hidden border border-[#d7d7d7] min-h-[24rem] w-full h-full">
              <div className="basis-[42%] p-4 bg-[#F8EEE4] border-b border-[#d7d7d7] flex flex-col items-center justify-center relative">
                <p className=" text-[3rem] leading-[0.9] font-CabinetGrotesk-Medium text-[#DE6D61] ">
                  156
                </p>
                <p className="text-[#EF7B56] text-[1rem]">Students impacted</p>
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
          <div className="p-6 min-h-[11.25rem] rounded-md col-span-1 row-span-1 border border-[#d7d7d7] bg-red-200">
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
          <div className="flex bg-white flex-col overflow-hidden  rounded-[10px]  border border-[#d7d7d7]  w-full h-full  relative">
            <h1 className="text-[2.75rem] pt-11 px-6  font-CabinetGrotesk-Medium text-[#9260FF] leading-[1.25]">
              Your dream companies
            </h1>
            <p className="text-[15px] leading-[2rem] p-6 tracking-[0.02rem] ">
              Here are some of the top tech companies you can break into with
              the power of work experience and magic of referrals
            </p>
            <div className="absolute bottom-0 -left-1  border-collapse ">
              <Image src={Label2} alt="Label 1" className="" />
            </div>
            <div className="absolute bottom-1 -right-1 -left-1 border-collapse ">
              <Image src={Label1} alt="Label 1" className="" />
            </div>
          </div>
        </div>
        <div className="grid mobile-xl:col-span-2 mobile-xl:grid-cols-2 md:col-span-1 md:grid-cols-1 md:grid-rows-2 md:row-span-3 gap-6  ">
          <div className="bg-[#DBE6EC] col-span-1 row-span-1 p-6 rounded-lg text-[#00679D] border boder-[#d7d7d7] ">
            <div className="bg-white w-full h-full rounded-lg text-[2rem] p-6 flex justify-center items-center ">
              <p className=" break-words font-CabinetGrotesk-Medium ">
                A recap of dream
                <Image src={Arrow} alt="Arrow" className="inline-block ml-2" />
                opportunities
              </p>
            </div>
          </div>
          <div className="bg-white col-span-1 row-span-1 p-6 rounded-lg border  border-[#d7d7d7]">
            <div className="bg-[#F1FBF9] text-[#014552] font-CabinetGrotesk-Medium p-4 rounded-md text-[2rem]">
              1st September
            </div>
            <div className="text-[15px] pt-6 leading-[1.9rem]">
              Is the earliest date you can start working with companies to gain
              work experience as a part of WorkEx Programs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
