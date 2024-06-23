import React from 'react';
import Image from 'next/image';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import CanalLogo from '@/assets/CanalLogo.png';
import DegreedLogo from '@/assets/degreedLogo.png';
import DiscordLogo from '@/assets/DiscordLogo.jpeg';
import ReactTimeago from 'react-timeago';
import SaveOutlineButton from '@/components/SaveOutlineButton';
import RightArrow from '@/assets/RightArrow.svg';
import RecommendedCard from './RecommendedCard';
import UpcomingSlide from './UpcomingSlide';
import { useDispatch, useSelector } from 'react-redux';
import { postsActions } from '@/store/posts-slice';
import { useEffect } from 'react';
import Link from 'next/link';
import LogoLinkedin from '@/assets/linkedin.svg';
import LogoTwitter from '@/assets/twitter.svg';
import LogoInstagram from '@/assets/instagram.svg';
import ApplyImg from '@/assets/apply.svg';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaSackDollar } from 'react-icons/fa6';
import Twoicons from '@/assets/twoicons.svg';
import { AiFillCaretDown } from 'react-icons/ai';

const datadummy = {
  id: 1,
  role: 'Senior Software Engineer - Front End - Bengaluru',
  company: 'Degreed',
  location: 'Bengaluru, Ka',
  type: 'Full Time',
  remote: true,
  logo: DegreedLogo,
  no_of_applicants: 12,
  posted_on: '2023-04-20T04:05:25.008Z',
};

const upcomingEvents = [
  {
    isImage: false,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    month: 'May',
    date: '20',
  },
  {
    isImage: false,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    month: 'May',
    date: '20',
  },
];

const upcomingWebinars = [
  {
    isImage: true,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    imageUrl:
      'https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/29-waf2mTZaYRYuEy5hdFQ.png',
  },
  {
    isImage: true,
    title: 'Sentry Info Session | Code. Learn. Grow',
    subtitle: 'Sentry • Webinar',
    imageUrl:
      'https://jumpstart-static.s3.amazonaws.com/backend/organizations/organization/29-waf2mTZaYRYuEy5hdFQ.png',
  },
];

const CompaniesModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.posts?.selectedCard);

  const { role, company, location, type, remote, logo, posted_on } =
    data || datadummy;

  useEffect(() => {}, [data]);

  const handelClose = () => {
    setIsModalOpen(false);
    dispatch(postsActions.setSelectedCard(null));
  };

  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform  mobile-lg:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <div
        className={`block mobile-lg:rounded-lg min-h-screen mobile-lg:min-h-fit bg-white mobile-lg:max-w-[64rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block mobile-lg:rounded-lg  bg-primary mobile-lg:max-w-[64rem] w-full  max-h-screen overflow-y-auto relative">
          <div className="h-full w-full bg-white sticky top-0 border border-light-gray p-[0.9375rem] mb-[0.9375rem] rounded-md z-[10]">
            {/* CloseLogo */}
            <div
              onClick={() => handelClose()}
              className="p-[9px] bg-black/[15%] rounded-full absolute  top-[14px]  right-[10px] cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
              <Image
                src={CrossLogoWhite}
                alt="Cross Logo"
                className={` w-[14px] h-[14px]`}
              />
            </div>
            {/* header */}
            <div className="flex min-h-[6.25rem] w-full gap-4 items-center">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[1rem] mb-[6px] leading-[1.375rem] font-medium text-primary-text">
                  {company}
                </p>
                <p className="mb-[0.9375rem] text-[0.875rem] leading-[1rem] font-normal ">
                  Creating conversations between brands and communities
                </p>
                <div className="flex items-center text-[#6e6e6e]">
                  <div className=" flex gap-1 items-end mr-4">
                    <BsFillPersonFill className="text-[0.875rem] " />
                    <span className="leading-[1] text-[12px]">
                      100-200 Employees
                    </span>
                  </div>
                  <div className=" flex gap-1 items-center mr-4">
                    <FaSackDollar className="text-[0.75rem] " />
                    <span className="leading-[1] text-[12px]">
                      $13M Funding
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full tablet-lg:px-[0.9375rem] overflow-hidden">
            <div className="max-w-[1000px] tablet-lg:px-3 mt-[20px] h-full flex flex-col tablet-lg:flex-row ">
              <div className="h-full flex-grow flex-shrink basis-[68%] min-w-[21.875rem] tablet-lg:mr-[10px] ">
                {/* Job description */}
                <div className="h-full p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                    JOB DESCRIPTION
                  </p>
                  <div>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text">
                      Degreed is the upskilling platform that connects learning
                      to opportunities. We integrate everything people use to
                      learn and build their careers—skill insights, LMSs,
                      courses, videos, articles, and projects—and match everyone
                      to growth opportunities that fit their unique skills,
                      roles, and goals. Degreed exists to discover, empower and
                      recognize the next generation of the world&apos;s
                      expertise.
                    </p>
                  </div>
                </div>

                {/* Apply */}
                <div className="h-full p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                    KEY MEMBERS
                  </p>
                  <div className="flex gap-4 w-full">
                    <div className="border border-[#d7d7d7] p-[15px] rounded-lg w-full relative">
                      <div className="absolute top-2 right-3 group">
                        <Image
                          src={Twoicons}
                          alt="Twoicons"
                          className="h-6 w-fit"
                        />
                        <div className="absolute bg-[#555] group-hover:opacity-[100%] opacity-0 text-[14px] py-2 rounded text-center text-[#fff] -top-[50px] -right-20 w-[13rem]">
                          Invites to unlock refferal
                          <AiFillCaretDown className="absolute group-hover:opacity-[100%] opacity-0 text-[32px] top-[60%] left-1/2 -translate-x-1/2 text-[#555]" />
                        </div>
                      </div>
                      <div className="mb-2 mt-[15px]">
                        <div className="w-[5rem] h-[5rem] mx-auto rounded-full border border-[#d7d7d7]"></div>
                      </div>
                      <div className="flex flex-col items-center">
                        <h4 class="font-medium text-base leading-snug mb-2 ">
                          Tade Oyerinde
                        </h4>
                        <p class="leading-4 text-sm">
                          Founder &amp; CEO at Campuswire
                        </p>
                      </div>
                    </div>
                    <div className="border border-[#d7d7d7]  rounded-lg w-full">
                      <div className="w-full  h-1/2 bg-[#E9ECEF] animate-pulse"></div>
                      <div className="p-[15px]">
                        <div className="h-5 w-[90%] rounded bg-[#E9ECEF] animate-pulse mb-2"></div>
                        <div className="h-4 w-[60%] rounded bg-[#E9ECEF] animate-pulse mb-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className=" flex-shrink h-full basis-[32%] min-w-[15rem] tablet-lg:ml-[10px]">
                <div className="p-[15px]  bg-white border border-[#d7d7d7] rounded-lg mb-[15px]">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem] ">
                    Socials
                  </p>
                  <div>
                    <span className="text-[0.875rem] leading-[22px]">
                      Website:&nbsp;
                    </span>
                    <Link href="https://www.canal.io/">
                      <span className="text-[0.875rem] leading-[22px] text-primary-text cursor-pointer">
                        canal.io
                      </span>
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-[15px] flex-wrap">
                    <Link
                      href="https://www.linkedin.com/company/canal-io/"
                      className="">
                      <Image src={LogoLinkedin} alt="Linkedin" />
                    </Link>
                    <Link href="https://twitter.com/canal_io">
                      <Image src={LogoTwitter} alt="Twitter" />
                    </Link>
                    <Link href="https://twitter.com/canal_io">
                      <Image src={LogoInstagram} alt="Github" />
                    </Link>
                  </div>
                </div>
                <div className="p-[15px]  bg-white border border-[#d7d7d7] rounded-lg mb-[15px]">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem] ">
                    TAGS
                  </p>
                  <div className="flex gap-2 mt-[15px] flex-wrap">
                    <RecommendedCard text={'Saas'} />
                    <RecommendedCard text={'Community Management'} />
                  </div>
                </div>
                <div className="  bg-white border border-[#d7d7d7] rounded-lg mb-[15px]">
                  <Image
                    src={ApplyImg}
                    alt="Apply"
                    className="w-full h-full rounded-t-lg"
                  />
                  <div className="p-[15px]">
                    <h3 className="text-[1.125rem] font-semibold leading-[1.5] mb-1">
                      Interested in a Career at Convosight
                    </h3>
                    <p className="leading-[150%] break-words text-[1rem]  ">
                      Click here to let the team know.
                    </p>
                  </div>
                  <button className=" px-3 py-1 mx-[15px] mb-[15px] bg-[#de5209] h-7 text-white text-sm font-medium leading-6 rounded outline-none">
                    <span>View more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesModal;
