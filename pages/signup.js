import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputField from '@/components/InputField';
import EmailField from '@/components/EmailField';
import PasswordField from '@/components/PasswordField';
import SignUpButton from '@/components/SignUpButton';
import Image from 'next/image';
import QuoteLogo from '@/assets/quote.svg';
import GoogleLogo from '@/assets/google.svg';
import MicrosoftLogo from '@/assets/microsoft.svg';
import NetflixLogo from '@/assets/netflix.svg';
import AmazonLogo from '@/assets/amazon.svg';
import AppleLogo from '@/assets/apple.svg';
import MetaLogo from '@/assets/meta.svg';
import TeslaLogo from '@/assets/tesla.svg';
import TiktokLogo from '@/assets/tiktokLogo.svg';
import CoinbaseLogo from '@/assets/coinbase.svg';
import AdobeLogo from '@/assets/adobe.svg';

const SignUp = () => {
  const [FirstName, setFirstName] = useState('');
  const [FirstNameError, setFirstNameError] = useState(false);
  const [LastName, setLastName] = useState('');
  const [LastNameError, setLastNameError] = useState(false);
  const [Email, setEmail] = useState('');
  const [EmailError, setEmailError] = useState(false);
  const [Password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  const [isAllValid, setIsAllValid] = useState(false);
  const [isFirstload, setIsFirstLoad] = useState(true);

  const [height, setHeight] = useState(0);

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

  const checkAllValid = () => {
    setIsAllValid(
      !FirstNameError && !LastNameError && !EmailError && !PasswordError
    );
  };

  useEffect(() => {
    if (isFirstload) {
      setIsFirstLoad(false);
      return;
    }
    checkAllValid();
  }, [FirstNameError, LastNameError, EmailError, PasswordError]);

  console.log(height);

  return (
    <div
      className={`flex h-full ${
        height > 582 ? 'h-screen overflow-hidden' : 'h-full'
      }`}>
      <div className="hidden  mobile-md:flex mobile-md:w-full lg:w-[45%] bg-[#F5F7F9] p-[1.5rem] lg:p-[2.75rem]   justify-center">
        <div className="max-w-[380px] w-full  h-fit ">
          <h1 className="font-CabinetGrotesk-Medium text-[1.75rem] tracking-tight leading-[1.5]">
            Helping students get one step closer to their dream companies
          </h1>
          <div className="grid grid-cols-5 gap-6 w-fit mt-8">
            <Image src={GoogleLogo} alt="Google Logo" />
            <Image src={MicrosoftLogo} alt="Microsoft Logo" />
            <Image src={NetflixLogo} alt="Netflix Logo" />
            <Image src={AmazonLogo} alt="Amazon Logo" />
            <Image src={AppleLogo} alt="Apple Logo" />
            <Image src={MetaLogo} alt="Meta Logo" />
            <Image src={TeslaLogo} alt="Tesla Logo" />
            <Image src={TiktokLogo} alt="Tiktok Logo" />
            <Image src={CoinbaseLogo} alt="Coinbase Logo" />
            <Image src={AdobeLogo} alt="Adobe Logo" />
          </div>
          <div className="w-full mt-11 rounded-[10px] h-fit bg-[#2D3345] relative p-[1.5rem]">
            <div className="absolute top-0 left-0 z-[10]">
              <Image
                src={QuoteLogo}
                alt="Quote Logo"
                className="w-[3rem] h-[3rem]"
              />
            </div>

            <div className="z-[20] relative ">
              <p className="text-white text-[1rem]">
                Amazed by the idea of CleverGrad aimed at creating new skill
                standards & introducing top 1% talent pool to companies with
                proof of work and work experience
              </p>

              <p className="text-[#828899] text-right mt-4">
                -Technical Recruiter at Google
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-[55%] flex justify-center pt-[2.25rem] w-full ${
          height > 582 ? 'min-h-screen overflow-y-auto ' : 'h-full  '
        }  `}>
        <div className="bg-white w-full  mobile-lg:w-[440px] h-fit my-auto   pb-[2.75rem] px-6">
          <h1 className="text-primary-text text-[3rem] font-CabinetGrotesk-Medium leading-[125%]">
            Sign Up
          </h1>
          <p className="text-primary-text my-[1rem] text-base">
            Sign up to kick-start your dream career and get discovered by your
            dream companies!
          </p>

          {/* Sign Up with Email */}
          <form className="flex flex-col gap-3 pb-6">
            <div className="flex flex-col mobile-lg:flex-row gap-3 mobile-lg:gap-6">
              <InputField
                label={'First name'}
                errorMessage={'First name is required'}
                inputValue={FirstName}
                setInputValue={setFirstName}
                isEmpty={FirstNameError}
                setIsEmpty={setFirstNameError}
              />
              <InputField
                label={'Last name'}
                errorMessage={'Last name is required'}
                inputValue={LastName}
                setInputValue={setLastName}
                isEmpty={LastNameError}
                setIsEmpty={setLastNameError}
              />
            </div>

            <EmailField
              label={'Email'}
              errorMessage={'Invalid email address'}
              Email={Email}
              setEmail={setEmail}
              EmailError={EmailError}
              setEmailError={setEmailError}
            />
            <PasswordField
              label={'Password'}
              Password={Password}
              setPassword={setPassword}
              PasswordError={PasswordError}
              setPasswordError={setPasswordError}
            />
            <SignUpButton isAllValid={isAllValid} label={'Sign up'} />
          </form>
          <p className=" text-[#666666] text-[0.875rem]  leading-[150%] font-medium pb-6">
            By clicking on “Sign up” you agree to our{' '}
            <Link href={'./terms'} className="inline-block  text-[#3365E6]">
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link href={'./privacy'} className="inline-block  text-[#3365E6]">
              Privacy Policy
            </Link>
          </p>
          <p
            className={` text-secondary-text  text-[0.875rem] text-center  leading-[150%] font-normal  mb-2 `}>
            <span className="mr-[1px]">Already have an Untapped account?</span>

            <Link
              href="/signin"
              className="text-link inline-block ml-[2px] font-semibold leading-[130%] cursor-pointer underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
