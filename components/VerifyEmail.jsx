import React from 'react';
import InputField from './InputField';
import ColouredButton from './ColouredButton';

const VerifyEmail = ({ nextPanel }) => {
  return (
    <div className=" max-w-[520px]">
      <h1 className="text-[2.75rem] leading-[1.5] font-CabinetGrotesk-Medium">
        Verify your email
      </h1>
      <div className="flex flex-col mt-6 gap-8 text-[0.875rem] leading-[1.5rem]">
        <p>
          You are just one step away to get started with creating an account and
          be discovered by your dream companies!
        </p>
        <p>We just sent a verification link to xxx@gmail.com</p>
        <p>Check your inbox and open the link to verify your email</p>
      </div>

      <div className="mt-6">
        <ColouredButton handelClick={nextPanel} label={'Resend Email'} />
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
