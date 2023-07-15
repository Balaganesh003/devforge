import React, { useState } from 'react';
import InputField from './InputField';
import ColouredButton from './ColouredButton';

const InvitePage = ({ nextPanel }) => {
  const [inviteCode, setInviteCode] = useState('');
  const [inviteCodeError, setInviteCodeError] = useState('');

  return (
    <div className=" max-w-[520px]  pb-[2.25rem]">
      <h1 className="text-[2.25rem] mobile-md:text-[2.75rem] leading-[1.5] font-CabinetGrotesk-Medium">
        clevergrad
      </h1>
      <div className="flex flex-col mt-6 gap-8 text-[0.875rem] leading-[1.5rem]">
        <p>
          CleverGrad is working on ideas aimed at changing the way students
          explore their dream careers & get discovered by their dream companies.
        </p>
        <p>
          We&lsquo;re still opening up for students from different universities
          across the world. Get an exclusive limited access explorer pass to
          discover some amazing features of Redefined which can help you achieve
          your career goals.
        </p>
        <p>Have an invite? Sign up to kick-start your dream career!</p>
      </div>
      <div className="max-w-[320px] mt-6">
        <InputField
          isEmpty={inviteCodeError}
          setIsEmpty={setInviteCodeError}
          inputValue={inviteCode}
          setInputValue={setInviteCode}
          errorMessage="Please enter a valid invite code"
          placeholder="Invite code"
        />
      </div>
      <div className="mt-6">
        <ColouredButton handelClick={nextPanel} label={'Unlock Access'} />
      </div>
    </div>
  );
};

export default InvitePage;
