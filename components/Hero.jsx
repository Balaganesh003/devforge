import React, { useState, useEffect } from 'react';
import LogoCard from '@/components/LogoCard';
import DriveLogo from '@/assets/users/LogoGoogleDocs.svg';
import GoogleSlidesLogo from '@/assets/users/LogoGoogleSlides.svg';
import LogoConfluence from '@/assets/users/LogoConfluence.svg';
import LogoGmail from '@/assets/users/LogoGmail.svg';
import LogoAtlassian from '@/assets/users/LogoAtlassian.svg';
import LogoTeams from '@/assets/users/LogoTeams.svg';
import LogoSlack from '@/assets/users/LogoSlack.svg';
import LogoDiscord from '@/assets/users/LogoDiscord.svg';
import LogoFigma from '@/assets/users/LogoFigma.svg';
import LogoNotion from '@/assets/users/LogoNotion.svg';
import LogoGoogleSheets from '@/assets/users/LogoGoogleSheets.svg';
import LogoJira from '@/assets/users/LogoJira.svg';
import LogoClickup from '@/assets/users/LogoClickup.svg';
import LogoGitlab from '@/assets/users/LogoGitlab.svg';
import LogoGithub from '@/assets/users/LogoGithub.svg';
import LogoDocs from '@/assets/users/LogoDocs.svg';
import LogoTrello from '@/assets/users/LogoTrello.svg';
import LogoLinear from '@/assets/users/LogoLinear.svg';
import LogoZoom from '@/assets/users/LogoZoom.svg';
import logoGoogleCalendar from '@/assets/users/logoGoogleCalendar.svg';
import LogoAsana from '@/assets/users/LogoAsana.svg';
import logoHangout from '@/assets/users/logoHangout.svg';

const logoData1 = [
  { id: 23, logo: LogoTeams },
  { id: 24, logo: GoogleSlidesLogo },
  { id: 25, logo: DriveLogo },
  { id: 26, logo: LogoConfluence },
  { id: 27, logo: LogoGmail },
  { id: 28, logo: LogoAtlassian },
  { id: 29, logo: LogoTeams },
  { id: 30, logo: GoogleSlidesLogo },
  { id: 31, logo: DriveLogo },
  { id: 32, logo: LogoConfluence },
];

const logoData2 = [
  { id: 11, logo: logoHangout },
  { id: 10, logo: logoGoogleCalendar },
  { id: 8, logo: LogoSlack },
  { id: 1, logo: LogoDiscord },
  { id: 2, logo: LogoFigma },
  { id: 3, logo: LogoNotion },
  { id: 4, logo: LogoGoogleSheets },
  { id: 5, logo: LogoJira },
  { id: 6, logo: LogoClickup },
  { id: 7, logo: LogoGitlab },
  { id: 9, logo: LogoAsana },
];

const logoData3 = [
  {
    id: 12,
    logo: LogoTrello,
  },
  {
    id: 13,
    logo: LogoZoom,
  },

  {
    id: 14,
    logo: LogoDocs,
  },
  {
    id: 15,
    logo: LogoTrello,
  },
  {
    id: 16,
    logo: LogoGitlab,
  },
  {
    id: 17,
    logo: LogoZoom,
  },
  {
    id: 18,
    logo: LogoAtlassian,
  },
  {
    id: 19,
    logo: logoHangout,
  },

  {
    id: 20,
    logo: LogoDocs,
  },
  {
    id: 21,
    logo: LogoTrello,
  },
  {
    id: 22,
    logo: LogoGmail,
  },
];

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(420);

  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position + 420);
  };

  const handleResize = () => {
    const currentWidth = window.innerWidth;
    setWidth(currentWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-white pt-[8rem] pb-[7rem]">
        <div className="max-w-[1130px] mx-auto md:px-[3.6rem] small-lg:px-[6.4em] xl:px-[9.6em]">
          <div className="grid grid-cols-1 md:grid-cols-1/2 gap-[3.6rem] overflow-hidden items-center ">
            <div className="flex flex-col px-[1.6em] mobile-lg:px-[2.4em] sm:px-[3.6em] md:px-0 ">
              <h1 className=" capitalize mb-[1.2rem] ">
                <span className="bg-clip-text font-CabinetGrotesk-Bold  text-[3.6em] mobile-lg:text-[4.8em] sm:text-[5.4em] md:text-[4.8em] small-lg:text-[6.4em] xl:text-[48px] text-[#2C2C2C] leading-[1.5] tracking-[-0.01em]  object-cover bg-[50%]">
                  Get discovered by your
                </span>
                <span className="text-[3.6em] block font-black leading-[1.5] tracking-[-0.01em] text-[#ED4A60] sm:text-[5.4em] md:text-[4.8em] xl:text-[48px] font-CabinetGrotesk-Bold mobile-lg:text-[4.8em] small-lg:text-[6.4em] ">
                  dream companies
                </span>
              </h1>
              <p className="text-[#2C2C2C] text-[16px] mobile-lg:text-[20px] leading-[1.8] max-w-[40ch]">
                A new age platform helping students unlock their dream career
                with proof of skills and experience
              </p>
            </div>
            <div className="text-white  hero min-w-[215px]">
              <div className="flex flex-col md:gap-[2rem] gap-[1rem]">
                <div
                  style={{
                    transform: `translateX(${
                      scrollPosition * (width <= 768 ? 0.1 : 0.2) * -1
                    }px)`,
                  }}
                  className="flex md:gap-[2rem] gap-[1rem] justify-start">
                  {logoData1.map((item) => (
                    <LogoCard key={item.id} logo={item.logo} />
                  ))}
                </div>
                <div
                  style={{
                    transform: `translateX(${
                      scrollPosition * (width <= 768 ? 0.1 : 0.2)
                    }px)`,
                  }}
                  className="flex md:gap-[2rem] gap-[1rem] justify-end">
                  {logoData2.map((item) => (
                    <LogoCard key={item.id} logo={item.logo} />
                  ))}
                </div>
                <div
                  style={{
                    transform: `translateX(${
                      scrollPosition * (width <= 768 ? 0.1 : 0.2) * -1
                    }px)`,
                  }}
                  className="flex md:gap-[2rem] gap-[1rem] justify-start">
                  {logoData3.map((item) => (
                    <LogoCard key={item.id} logo={item.logo} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
