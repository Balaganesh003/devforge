import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const MobileNumberFeild = ({ label, phone, setPhone }) => {
  return (
    <div className="">
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        {label}
      </label>
      <PhoneInput
        country={'in'}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};

export default MobileNumberFeild;
