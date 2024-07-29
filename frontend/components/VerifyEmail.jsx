import React, { useState, useRef } from 'react';
import ColouredButton from './ColouredButton';
import Otp from './Otp';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';

const VerifyEmail = ({ isLoading, nextPanel }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpInputRefs = useRef([]);

  const router = useRouter();
  const handelOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:8000/api/user/verifyUser',
        {
          otp: otp.join(''),
        }
      );

      const data = await res.json();

      console.log(data);

      if (res.status === 200) {
        // Successfully verified OTP
        toast.success('OTP verified successfully!');
        router.push('/onboarding');
        nextPanel(e);
      } else {
        // Handle specific errors based on server response
        switch (data.message) {
          case 'JWT token error':
            toast.error('Authentication error. Please log in again.');
            break;
          case 'Incorrect OTP':
            toast.error('Incorrect OTP. Please try again.');
            break;
          case 'OTP timed out':
            toast.error('OTP has expired. Please request a new one.');
            break;
          default:
            toast.error('Something went wrong. Please try again later.');
            break;
        }
      }
    } catch (error) {
      // Handle network or other errors
      toast.error('Network error. Please check your internet connection.');
    }
  };
  return (
    <div className=" max-w-[520px]">
      <ToastContainer />
      <h1 className="text-[2.25rem] tracking-[-0.005em]  leading-[1.5] font-CabinetGrotesk-Medium">
        Verify your email
      </h1>
      <div className="flex flex-col mt-6 gap-6 text-[0.9375rem] tracking-[-0.005em] leading-[1.5rem]">
        <p>
          You are just one step away to get started with creating an account and
          be discovered by your dream companies!
        </p>
        <p>We just sent a verification link to xxx@gmail.com</p>
        <p>Check your inbox and open the link to verify your email</p>
      </div>
      <div className="pt-[13px]">
        <Otp otp={otp} setOtp={setOtp} otpInputRefs={otpInputRefs} />
      </div>
      <div className="mt-6">
        <ColouredButton
          handelClick={handelOtpSubmit}
          label={'Verify'}
          isLoading={isLoading}
        />
      </div>
      <div className="mt-8">
        <p className="text-[0.875rem] text-[#666666] leading-[1.5rem]  ">
          Wanna change your mail id?
          <span className="text-[#3365E6] cursor-pointer ml-1 font-semibold">
            Click Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
