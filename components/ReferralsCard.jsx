import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const ReferralsCard = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  return (
    <div className="px-5 w-full  outline   outline-[#d7d7d7] flex flex-col justify-between">
      <p class="text-center font-semibold mb-4 mt-2 text-xl">
        Build the Hirable community!
      </p>
      <p class=" mb-1 text-sm font-normal md:px-10 text-center  break-words ">
        At Hirable, we are building a universe of opportunities. We are laying a
        path to success for every student, whatever their background is.
      </p>
      <p class="mb-4 text-sm font-normal md:px-10 text-center  break-words ">
        Get rewarded for empowering your peers to meet their professional goals.
        Give your friends the gift of a career.
      </p>
      <div className="md:max-w-[365px] mx-auto">
        <div className="flex gap-4 items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={`w-full text-[0.9275rem] leading-[1.75] bg-white h-[36.5px] outline py-[5px] outline-[1.5px] outline-[#d7d7d7] px-4 rounded transition-all duration-200 focus:outline-[1.5px]  focus:outline-[#01a2a4]  `}
          />
          <button
            className={
              'bg-[#01A2A4] hover:bg-[#01A2A4]/90  h-[37px] tracking-tight text-[0.875rem] font-medium border-[#01A2A4] text-white  w-[140px] rounded flex-shrink-0'
            }>
            Send Invite
          </button>
        </div>
        <div className="flex gap-4 w-full items-center mt-4 mb-5">
          <input
            type="email"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            placeholder="Invite Code"
            className={`w-full text-[0.9275rem] leading-[1.75] bg-white h-[36.5px] outline py-[5px] outline-[1.5px] outline-[#d7d7d7] px-4 rounded transition-all duration-200 focus:outline-[1.5px]  focus:outline-[#01a2a4]  `}
          />
          <button
            className={
              'bg-[#01A2A4] hover:bg-[#01A2A4]/90  h-[37px] tracking-tight text-[0.875rem] font-medium border-[#01A2A4] text-white  w-[140px] rounded flex-shrink-0'
            }>
            Copy Invite code
          </button>
        </div>
      </div>
      <div className="max-w-[520px] mb-10 border rounded-md hover:bg-[#EEEAEA] border-[#d7d7d7]  p-4 mx-auto w-full">
        <h1 className="text-[1rem] leading-[1.7] font-semibold mb-3 flex gap-5 items-center">
          <FiEdit className="text-[1rem] leading-[1rem]" /> Write a message for
          your invities
        </h1>
        <p className="text-sm font-normal mb-3">
          The note below will be sent to your invities
        </p>
        <textarea
          className="w-full  h-[118px]  tracking-[0.01em] leading-[1.3rem] resize-none text-[0.875rem]  bg-[#F4f4f3]  p-4"
          placeholder="Write a message ">
          Hey, I&apos;ve been using Hirable for a while and thought you would
          like it as well. I look to forward to see you working on some amazing
          ideas, transforming your experiences and achieving your goals being a
          part of this wonderful community
        </textarea>
      </div>
    </div>
  );
};

export default ReferralsCard;
