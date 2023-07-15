import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputField from '@/components/InputField';
import EmailField from '@/components/EmailField';
import PasswordField from '@/components/PasswordField';
import SignUpButton from '@/components/SignUpButton';

const SignUp = ({ nextPanel }) => {
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
      !FirstNameError &&
        !LastNameError &&
        !EmailError &&
        !PasswordError &&
        FirstName &&
        LastName &&
        Email &&
        Password
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
    <div className="bg-white w-full  mobile-lg:max-w-[520px] h-fit my-auto  pb-[2.75rem]">
      <h1 className="text-primary-text text-[3rem] font-CabinetGrotesk-Medium leading-[125%]">
        Sign Up
      </h1>
      <p className="text-primary-text my-[1rem] text-base">
        Sign up to kick-start your dream career and get discovered by your dream
        companies!
      </p>

      {/* Sign Up with Email */}
      <form className="flex flex-col gap-3 pb-6">
        <div className="flex flex-col sm:flex-row gap-3 mobile-lg:gap-6">
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
        <div className=" w-[150px] mx-auto">
          <SignUpButton
            nextPanel={nextPanel}
            isAllValid={isAllValid}
            label={'Sign up'}
          />
        </div>
      </form>
      <p className=" text-[#666666] text-[0.875rem] text-center mt-4 tracking-tight leading-[150%] font-medium pb-6">
        By clicking on “Sign up” you agree to our{' '}
        <Link href={'./terms'} className="whitespace-nowrap  text-[#3365E6]">
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link href={'./privacy'} className=" whitespace-nowrap text-[#3365E6]">
          Privacy Policy
        </Link>
      </p>
      <p
        className={` text-secondary-text  tracking-tight text-[0.875rem] text-center  leading-[150%] font-normal  mb-2 `}>
        <span className="mr-[1px]">Already have an Untapped account?</span>

        <Link
          href="/signin"
          className="text-link inline-block ml-[2px] font-semibold leading-[130%] cursor-pointer underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
