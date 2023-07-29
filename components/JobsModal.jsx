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

const JobsAndCompaniesModal = ({ isModalOpen, setIsModalOpen }) => {
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
            <div className="flex min-h-[6.25rem] w-full gap-4">
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  className="w-[100px] h-[100px] object-cover rounded-md"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[1rem] mb-[5px] leading-[1.375rem] font-medium text-primary-text">
                  {role || 'Senior Software Engineer - Front End - Bengaluru'}
                </p>
                <p className="mb-[0.6rem] text-[0.875rem] leading-[1.5] font-normal ">
                  {company}
                </p>
                <div className="mb-3 text-ellipsis text-[0.75rem] leading-[1.5] text-primary-text">
                  <span className="captilize">{type || 'Full time'}</span>
                  <span className="mx-[3px]">•</span>
                  <span className="captilize">
                    {location}, {`${remote && 'Remote'}`}
                  </span>
                </div>
                <div className="flex gap-1 mb-2">
                  <span className="text-[0.75rem] text-secondary-text font-normal">
                    Posted
                  </span>
                  <ReactTimeago
                    date={posted_on || '2023-04-20T04:05:25.008Z'}
                    className="text-[0.75rem] text-secondary-text font-normal"
                  />
                </div>
              </div>
            </div>
            <hr className="h-[1px] bg-light-gray my-[0.9375rem] -mx-[0.9375rem]" />
            {/* Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <SaveOutlineButton />
                <SaveOutlineButton isShare={true} />
              </div>
              <div className="">
                <button className="max-w-[13.25rem]   mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer ">
                  <span>Apply</span>
                  <Image
                    src={RightArrow}
                    alt="back"
                    className="h-[0.875rem] w-fit"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="h-full w-full tablet-lg:px-[0.9375rem] overflow-hidden">
            <div className="max-w-[1000px] tablet-lg:px-3 mt-[20px] h-full flex flex-col tablet-lg:flex-row ">
              <div className="h-full flex-grow flex-shrink basis-[68%] min-w-[21.875rem] tablet-lg:mr-[10px] ">
                {/* Recommended */}
                <div className="flex flex-col h-full p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <div className="mb-[15px]">
                    <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                      RECOMMENDED EXPERIENCE LEVEL
                    </p>
                    <RecommendedCard text={'Internship'} />
                  </div>
                  <div>
                    <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                      RECOMMENDED SKILLS AND EXPERTISE
                    </p>
                    <div className="flex gap-2">
                      <RecommendedCard text={'Angular'} />
                      <RecommendedCard text={'Frontend'} />
                    </div>
                  </div>
                </div>
                {/* Job description */}
                <div className="h-full p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem]">
                    JOB DESCRIPTION
                  </p>
                  <div>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text mb-[1.25rem]">
                      Degreed is the upskilling platform that connects learning
                      to opportunities. We integrate everything people use to
                      learn and build their careers—skill insights, LMSs,
                      courses, videos, articles, and projects—and match everyone
                      to growth opportunities that fit their unique skills,
                      roles, and goals. Degreed exists to discover, empower and
                      recognize the next generation of the world&apos;s
                      expertise.
                    </p>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text mb-[1.25rem]">
                      The LXP Profiles team at Degreed is looking for an
                      experienced Front End Developer who is excited about
                      designing and implementing scalable systems to join our
                      team. In this position you will work along-side other
                      experienced developers and work with the Product Manager
                      and Engineering Manager to implement reliable, robust and
                      scalable solutions for the Degreed LXP as well add new
                      features, fix bugs, and drive the Degreed product forward.
                      We value individuals who are lifelong learners and
                      passionate about taking new challenges with a continuous
                      improvement mindset.
                    </p>
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text mb-[1.25rem]">
                      <strong>
                        <u>
                          This role will be based onsite in Bengaluru, India.
                        </u>{' '}
                        After an in-office onboarding period,
                        <u>
                          incumbents are expected to be available in office for
                          a few days per week as part of hybrid work model.
                        </u>{' '}
                        Candidates will also be required to travel
                        internationally 1-2 times annually for full company
                        gatherings.
                      </strong>
                    </p>
                    <ul className="list-disc ml-[1.25rem]  mb-[1.25rem]">
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Deliver end-to-end implementation of new user-facing
                        features and/or enhancements to existing features
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        You will implement beautiful layouts using SASS / CSS3
                        and HTML
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Craft Angular components and services with an eye for
                        modularity
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Continually improve the quality of UI code
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Collaborate with product owners to ensure
                        features/changes meet business requirements and fulfil
                        the Degreed strategy
                      </li>
                    </ul>
                    {/* Why are your */}
                    <h3 className="text-[1.125rem] font-medium leading-[150%] mb-1">
                      <strong>Why are you</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      There are only a handful of folks who meet all
                      qualifications. We care more about hiring engineers that
                      have a track record of shipping impactful, quality
                      software than checking all the boxes. So, whether you meet
                      all the qualifications or a partial set, we want to hear
                      from you
                    </p>
                    <ul className="list-disc ml-[1.25rem] mt-[1.25rem]  mb-[1.25rem]">
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Bachelor&apos;s degree in Computer Science or equivalent
                        experience
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        You will have at least 5+ years experience in developing
                        front-end software
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        At least 3 years Angular experience required - latest
                        version preferred but not required
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        3+ years of experience in front-end development
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Experienced with:
                      </li>
                      <ul className="list-disc">
                        <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                          Angular v12+
                        </li>
                        <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                          RxJS v6+
                        </li>
                        <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                          Unit testing with Jest
                        </li>
                        <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                          NgBootstrap v10+
                        </li>
                      </ul>
                    </ul>
                    <h3 className="text-[1.125rem] font-medium leading-[150%] mb-2">
                      <strong>What sets you Apart</strong>
                    </h3>
                    <ul className="list-disc ml-[1.25rem] mb-[1.25rem]">
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        Data visualization experience (especially with
                        HighCharts) a plus
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                        ARIA attributes and screen reader technologies
                      </li>
                      <li className="leading-[1.5] break-words text-[0.875rem] text-primary-text">
                        Cypress experience
                      </li>
                    </ul>
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                      <strong>Work Environment & Physical Demands</strong>
                    </p>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      Degreed is a remote-first company; however, our roles are
                      open to in-office or flex work if you live in a city with
                      a physical office location (when it is safe to return to
                      the office). If this role has the opportunity to operate
                      100% virtually, it will be from your home office within
                      any country that Degreed is authorized to do business. If
                      this role is based in a Degreed office location, you will
                      have the flexibility to work remotely if needed. As a
                      global business, we primarily collaborate through virtual
                      meetings (Zoom), email, and Slack. You will be required to
                      operate a laptop computer, computer software platforms,
                      and other office productivity machinery as necessary in
                      this role. Due to the nature of this role, you must be
                      able to remain stationary for extended periods and must be
                      able to observe and interpret written and/or verbal
                      communication.
                    </p>
                  </div>
                </div>
                {/* About company */}
                <div className=" p-[15px] mb-[15px] bg-white border border-light-gray rounded-lg">
                  <p className="uppercase mb-[15px] text-ellipsis leading-[1.125rem] font-medium text-secondary-text text-[0.8125rem] ">
                    About {company}
                  </p>
                  <div className="mt-3 pb-3 border-b border-gray-hover">
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                      Industry: Enterprise Software, EdTech
                    </p>
                  </div>
                  <div className="mt-3 pb-3 border-b border-gray-hover">
                    <p className="leading-[1.5] break-words text-[0.875rem] text-primary-text ">
                      Company size: 201-500 employees
                    </p>
                  </div>
                  <div className=" mt-3">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Mission</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      Degreed started with a mission to challenge the college
                      degree & other traditional credentials as the only way to
                      set yourself up for success. Our upskilling platform is
                      built on peoples inherent desire to learn, grow, & advance
                      in their careers, giving them the data, tools, & skills to
                      make progress — degree by degree.
                    </p>
                  </div>
                  <div className="  ">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Belief</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      We believe everyone is driven by an innate desire to learn
                      and grow. By equipping people with the skills the world
                      needs, we help them redefine their careers, their
                      companies, & their fields. We believe that together we can
                      push the limits of whats possible.
                    </p>
                  </div>
                  <div className=" ">
                    <h3 className="text-[1.125rem] font-medium leading-[150%] my-2">
                      <strong>Our Purpose</strong>
                    </h3>
                    <p className="leading-[1.25rem] break-words text-[0.875rem] text-primary-text ">
                      We propel people and their companies toward their
                      aspirations & goals. By providing the guidance, learning,
                      & insights they need, we help them to not only understand
                      where their strengths lie, but to amplify and multiply
                      them.
                    </p>
                  </div>
                </div>
                {/* Apply */}
                <div className="p-[2rem] bg-dark-green mb-[15px] overflow-hidden rounded-md border border-gray-hover text-white">
                  <h3 className="text-[1.125rem] font-semibold leading-[125%] mb-[15px]">
                    Not sure if you should apply?
                  </h3>
                  <p className="leading-[150%] break-words text-[1rem]  mb-6">
                    Many people, especially those from underserved groups,
                    don&apos;t apply because they&apos;re not 100% qualified. If
                    you match at least 50% of the requirements, we encourage you
                    to apply.
                  </p>
                  <button className=" w-full justify-center text-primary-text  mx-auto  bg-primary-button px-4 rounded font-semibold text-[0.875rem] h-[2.5rem] flex items-center gap-2 hover:bg-secondary-button hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
                    <span>Apply</span>
                    <Image
                      src={RightArrow}
                      alt="back"
                      className="h-[0.875rem] w-fit"
                    />
                  </button>
                </div>
              </div>
              {/* Right */}
              <div className=" flex-shrink h-full basis-[32%] min-w-[15rem] tablet-lg:ml-[10px]">
                <UpcomingSlide title={'events'} cardList={upcomingEvents} />
                <UpcomingSlide title={'Webinars'} cardList={upcomingWebinars} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsAndCompaniesModal;
