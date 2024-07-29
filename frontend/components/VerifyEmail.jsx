import React, { useState, useRef } from 'react';
import ColouredButton from './ColouredButton';
import Otp from './Otp';
import { toast, ToastContainer } from 'react-toastify';
import axios from '../utils/axiosConfig.js';
import { useRouter } from 'next/router';

const VerifyEmail = ({ isLoading, nextPanel }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpInputRefs = useRef([]);

  const router = useRouter();
  const handelOtpSubmit = async (e) => {
  e.preventDefault();

    try {
      const res = await axios.post(
        '/api/user/verifyUser',
        {
          otp: otp.join(''),
        },
        {
          withCredentials: true, 
        }
      );
      console.log(res.data);
        //Successfully verified OTP
        toast.success('OTP verified successfully!');
        router.push('/onboarding');        
    } catch (error) {
      // Handle network or other errors
      console.log(error.response.data.message)
      toast.error(error.response.data.message);
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
