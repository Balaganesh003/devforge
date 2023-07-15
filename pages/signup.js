import React, { useState, useEffect } from 'react';
import SignUp from '@/components/SignUp';
import Image from 'next/image';
import QuoteLogo from '@/assets/quote.svg';
import GoogleLogo from '@/assets/google.svg';
import MicrosoftLogo from '@/assets/microsoft.svg';
import NetflixLogo from '@/assets/netflix.svg';
import AmazonLogo from '@/assets/amazon.svg';
import AppleLogo from '@/assets/apple.svg';
import MetaLogo from '@/assets/meta.svg';
import TeslaLogo from '@/assets/tesla.svg';
import TiktokLogo from '@/assets/tiktoklogo.svg';
import CoinbaseLogo from '@/assets/coinbase.svg';
import AdobeLogo from '@/assets/adobe.svg';
import InvitePage from '@/components/InvitePage';
import VerifyEmail from '@/components/VerifyEmail';
import { motion, AnimatePresence, easeIn } from 'framer-motion';

const SignUpPage = () => {
  const [height, setHeight] = useState(0);
  const [index, setIndex] = useState(0);

  const [direction, setDirection] = useState(1);

  const nextPanel = (e) => {
    e.preventDefault();

    if (index < 2) {
      setIndex(index + 1);
      setDirection(1);
    }
  };

  const prevPanel = (e) => {
    e.preventDefault();

    if (index > 0) {
      setIndex(index - 1);
      setDirection(-1);
    }
  };

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const handelResize = () => {
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handelResize);
    return () => {
      window.removeEventListener('resize', handelResize);
    };
  }, []);

  return (
    <div
      className={`flex h-full w-full ${
        height > 582 ? 'h-screen overflow-hidden' : 'h-full'
      }`}>
      <div className="hidden  mobile-lg:flex  mobile-lg:w-[45%] bg-[#F5F7F9] px-4 py-[2.75rem] sm:p-[1.5rem] lg:p-[2.75rem]   justify-center">
        <div className="max-w-[380px]  w-full flex flex-col h-fit ">
          <h1 className="font-CabinetGrotesk-Medium text-[1.5rem] sm:text-[1.75rem] tracking-tight leading-[1.5]">
            Helping students get one step closer to their dream companies
          </h1>
          <div className="grid grid-cols-4  grid-rows-2 md:grid-cols-5 gap-6 w-fit mt-8">
            <Image src={GoogleLogo} alt="Google Logo" />
            <Image src={MicrosoftLogo} alt="Microsoft Logo" />
            <Image src={NetflixLogo} alt="Netflix Logo" />
            <Image src={AmazonLogo} alt="Amazon Logo" />
            <Image src={AppleLogo} alt="Apple Logo" />
            <Image src={MetaLogo} alt="Meta Logo" />
            <Image src={TeslaLogo} alt="Tesla Logo" />
            <Image src={TiktokLogo} alt="Tiktok Logo" />
            <Image
              src={CoinbaseLogo}
              alt="Coinbase Logo"
              className="hidden md:block"
            />
            <Image
              src={AdobeLogo}
              alt="Adobe Logo"
              className="hidden md:block"
            />
          </div>

          <div className="w-full  top-0 mt-8 md:mt-11 rounded-[10px] h-fit bg-[#2D3345] relative p-[1rem] md:p-[1.5rem] ">
            <div className="absolute top-0 left-0 z-[10]">
              <Image
                src={QuoteLogo}
                alt="Quote Logo"
                className="w-[3rem] h-[3rem]"
              />
            </div>

            <div className="z-[20] relative ">
              <p className="text-white md:text-[1rem] tracking-tight text-[0.875rem]">
                Amazed by the idea of CleverGrad aimed at creating new skill
                standards & introducing top 1% talent pool to companies with
                proof of work and work experience
              </p>

              <p className="text-[#828899] md:text-[1rem]  tracking-[-0.02rem] text-[0.875rem] text-right mt-4">
                -Technical Recruiter at Google
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-lg:w-[55%] overflow-x-hidden w-full flex justify-center px-[1.5rem] lg:px-[2.25em] py-[2.25rem]   ${
          height > 582 ? 'min-h-screen overflow-y-auto ' : 'h-full  '
        }  `}>
        {/* Slides */}
        <AnimatePresence initial={false} custom={index} mode={`wait`}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 300 * direction }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            ease={easeIn}>
            {index === 0 && <InvitePage nextPanel={nextPanel} />}
            {index === 1 && (
              <SignUp nextPanel={nextPanel} prevPanel={prevPanel} />
            )}
            {index === 2 && (
              <VerifyEmail nextPanel={nextPanel} prevPanel={prevPanel} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignUpPage;
