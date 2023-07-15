import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputField from '@/components/InputField';
import EmailField from '@/components/EmailField';
import PasswordField from '@/components/PasswordField';
import SignUpButton from '@/components/SignUpButton';
import BrandLogo from '@/assets/brand-logo-combined.svg';
import Image from 'next/image';

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

  return (
    <div className="flex min-h-screen w-full h-full">
      <div className="lg:w-[65%]  flex justify-center relative items-center h-full min-h-screen">
        <div className=" lg:top-10 z-10 absolute lg:left-11 left-6 top-5">
          <Link href="/">
            <Image src={BrandLogo} width={180} height={150} alt="Logo" />
          </Link>
        </div>
        <div className="bg-white w-full  mobile-md:w-[420px] h-full mt-1  pt-[6.25rem] pb-[2.75rem] px-6">
          <h1 className="text-primary-text text-[3rem] font-semibold leading-[125%]">
            Sign Up
          </h1>
          <p className="text-primary-text my-[1rem] text-base">
            Join Untapped today and get hired by the worlds top tech and finance
            companies.
          </p>
          <p className="pb-[1.5rem] text-[0.875rem] leading-[150%] font-normal text-secondary-text">
            Not a candidate?
            <Link href="/auth">
              <span className="text-link ml-[2px] font-semibold leading-[130%] cursor-pointer">
                Sign up as a recruiter
              </span>
            </Link>
          </p>
          {/* Sign In with Google */}
          <div className=""></div>
          {/* Or option */}
          <div className="flex items-center mt-6 mb-6">
            <hr className="bg-light-gray w-full h-[1.5px]" />
            <p className="text-center text-secondary-text text-[0.875rem] leading-[150%] font-normal mx-[6px]">
              or
            </p>
            <hr className="bg-light-gray w-full h-[1.5px]" />
          </div>
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
          <p className=" text-secondary-text text-[0.875rem] leading-[150%] font-normal pb-6">
            By clicking “Sign up” or “Sign up with Google,” you’re agreeing to
            Untapped’s{' '}
            <Link href={'./terms'} className="inline-block underline">
              Terms of Use.
            </Link>
          </p>
          <hr className="bg-light-gray w-full h-[1px]" />
          <p className=" text-secondary-text  text-[0.875rem] leading-[150%] font-normal pt-6 mb-2 ">
            <span className="mr-[1px]">Already have an Untapped account?</span>

            <Link
              href="/signin"
              className="text-link inline-block ml-[2px] font-semibold leading-[130%] cursor-pointer underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden mobile-md:flex mobile-md:w-full lg:w-[35%] bg-white ">
        <div className="w-full h-full bg-bottom-left-signup bg-signup-banner"></div>
      </div>
    </div>
  );
};

export default SignUp;
