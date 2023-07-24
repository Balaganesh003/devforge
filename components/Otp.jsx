import React, { useState, useRef } from 'react';

const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const otpInputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });

      if (index < otpInputRefs.current.length - 1 && value !== '') {
        otpInputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      otpInputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="my-[13px]">
      <div className="flex space-x-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            className="w-11 h-11 text-black rounded-lg border border-[#D7D7D7] text-center text-2xl outline-none focus:shadow-field bg-white focus:border-black transition-field duration-200 ease-in-out-expo "
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (otpInputRefs.current[index] = ref)}
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
