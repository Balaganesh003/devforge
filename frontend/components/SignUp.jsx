import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import InputField from '@/components/InputField';
import EmailField from '@/components/EmailField';
import PasswordField from '@/components/PasswordField';
import SignUpButton from '@/components/SignUpButton';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ nextPanel, isLoading }) => {
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
        ? true
        : false
    );
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:8000/api/user/createUser',
        {
          firstName: FirstName,
          lastName: LastName,
          email: Email,
          password: Password,
        }
      );

      if (res.status === 200) {
        nextPanel(e);
        toast.success('Sign up successful!');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        if (error.response.status === 409) {
          toast.error('This email is already registered.');
        } else {
          toast.error('Something went wrong. Please try again later.');
        }
      } else {
        // Network error or no response from server
        toast.error('Network error. Please check your internet connection.');
      }
    }
  };

  useEffect(() => {
    if (isFirstload) {
      setIsFirstLoad(false);
      return;
    }
    checkAllValid();
  }, [
    FirstNameError,
    LastNameError,
    EmailError,
    PasswordError,
    FirstName,
    LastName,
    Email,
    Password,
  ]);
  return (
    <div className="bg-white w-full  mobile-lg:max-w-[520px] mt-[2.25rem]  my-auto">
      <ToastContainer />
      <h1 className="text-primary-text text-[2.25rem] tracking-[-0.005em] font-CabinetGrotesk-Medium leading-[125%]">
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
            isLoading={isLoading}
            nextPanel={handleSignUp}
            isAllValid={isAllValid}
            label={'Sign up'}
          />
        </div>
      </form>
      <p className=" text-[#666666] text-[0.9375rem] text-center mt-4 tracking-[-0.005em] leading-[150%] font-normal  pb-6">
        By clicking on “Sign up” you agree to our{' '}
        <Link
          href={'./terms'}
          className="whitespace-nowrap font-medium text-link">
          Terms of Use
        </Link>{' '}
        and{' '}
        <Link
          href={'./privacy'}
          className=" whitespace-nowrap font-medium text-link">
          Privacy Policy
        </Link>
      </p>
      <p
        className={` text-secondary-text   text-[0.9375rem] text-center  leading-[150%] font-normal tracking-[-0.005em]  mb-2 `}>
        <span className="mr-[1px]">Already have an Untapped account?</span>

        <Link
          href="/signin"
          className="text-link inline-block ml-[2px] font-medium leading-[130%] cursor-pointer underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
