import React, { useState } from 'react';
import InputField from './InputField';
import DropDown from './DropDown';
import EmailField from './EmailField';
import Input from './Input';
import MobileNumberFeild from './MobileNumberFeild';

const genders = ['He/Him', 'She/Her', 'They/Them'];

const ProfileDetails = () => {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [pronouns, setPronouns] = useState('');
  const [pronounsError, setPronounsError] = useState(false);
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState(false);
  const [alternateEmail, setAlternateEmail] = useState('');
  const [alternateEmailError, setAlternateEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [alternatePhoneNumber, setAlternatePhoneNumber] = useState('');
  const [alternatePhoneNumberError, setAlternatePhoneNumberError] =
    useState(false);
  const [tagline, setTagline] = useState('');
  const [taglineError, setTaglineError] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [aboutMeError, setAboutMeError] = useState(false);

  return (
    <div className="w-full max-w-[522px] mx-auto">
      <div className="flex flex-col gap-[13px]">
        <InputField
          label={'User Name'}
          placeholder={'User Name'}
          errorMessage={'User Name is required'}
          inputValue={userName}
          setInputValue={setUserName}
          isEmpty={userNameError}
          setIsEmpty={setUserNameError}
        />

        <div className="w-full flex flex-col mobile-lg:flex-row gap-6 mt-[1px] mb-[13px]">
          <div className="w-full basis-[50%]">
            <MobileNumberFeild
              label={'Mobile Number'}
              phone={phoneNumber}
              setPhone={setPhoneNumber}
            />
          </div>
          <div className="w-full basis-[50%]">
            <MobileNumberFeild
              label={'Alternative Mobile Number'}
              phone={alternatePhoneNumber}
              setPhone={setAlternatePhoneNumber}
            />
          </div>
        </div>
        <div className="">
          <EmailField
            label={'Alternate Email Address'}
            placeholder={'Eg: surajk@vu.edu.in'}
            errorMessage={'Alternate Email Address is required'}
            Email={alternateEmail}
            setEmail={setAlternateEmail}
            EmailError={alternateEmailError}
            setEmailError={setAlternateEmailError}
          />
        </div>
        <div className="w-full flex flex-col mobile-lg:flex-row gap-6 mb-[9px]">
          <div className="w-full basis-[50%]">
            <DropDown
              label={'Pronoun'}
              dropdownList={genders}
              placeholder={'Select Pronoun'}
            />
          </div>
          <div className="w-full basis-[50%]">
            <DropDown
              label={'Pronoun'}
              dropdownList={genders}
              placeholder={'Select Pronoun'}
            />
          </div>
        </div>
        <div className="w-full">
          <Input
            label={'Tagline'}
            inputValue={tagline}
            setInputValue={setTagline}
            placeholder={'Tagline'}
          />
        </div>
        <div className="w-full">
          <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
            About Me
          </label>
          <textarea
            className="w-full h-[100px] resize-none border border-[#d7d7d7] outline-none focus:border-black transition-field duration-[0.25s] focus:shadow-field ease-in-out-expo rounded p-4"
            placeholder="About Me"></textarea>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
