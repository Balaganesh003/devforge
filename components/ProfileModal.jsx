import React, { useState } from 'react';
import Image from 'next/image';
import InputField from './InputField';
import DropDown from './DropDown';
import Input from './Input';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import crossLogoGray from '@/assets/crossLogoGray.svg';
import { BiUpArrowCircle } from 'react-icons/bi';
import Avatar from './Avatar';
import SearchDropDown from './SearchDropDown';

const genders = ['He/Him', 'She/Her', 'They/Them'];

const cities = [
  'New York, NY, USA',
  'Los Angeles, CA, USA',
  'London, England',
  'Paris, France',
  'Tokyo, Japan',
  'Sydney, Australia',
  'Rome, Italy',
  'Toronto, ON, Canada',
  'Berlin, Germany',
  'Mumbai, Maharashtra, India',
];

const ProfileModal = () => {
  const [avatar, setAvatar] = useState('');
  const [Name, setName] = useState('');
  const [NameError, setNameError] = useState(false);
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="mb-[2.25rem]">
      <div className="flex w-full flex-col gap-2 justify-center">
        <div className="flex justify-center w-full">
          <Avatar handleFileSelect={handleFileSelect} avatarSrc={avatar} />
        </div>

        <InputField
          label={'User Name'}
          placeholder={'User Name'}
          errorMessage={'User Name is required'}
          inputValue={userName}
          setInputValue={setUserName}
          isEmpty={userNameError}
          setIsEmpty={setUserNameError}
        />

        <div className="w-full flex gap-6 mt-[4px]">
          <div className="w-full basis-[40%]">
            <DropDown
              label={'Pronoun'}
              dropdownList={genders}
              placeholder={'Pronoun'}
              selectedValue={''}
              setSelectedValue={''}
            />
          </div>
          <div className="w-full basis-[60%]">
            <InputField
              label={'Name'}
              placeholder={'Name'}
              errorMessage={'Name is required'}
              inputValue={Name}
              setInputValue={setName}
              isEmpty={NameError}
              setIsEmpty={setNameError}
            />
          </div>
        </div>
        <div className="w-full mt-[7px]">
          <SearchDropDown
            label1={'Current Location'}
            marginBottomLabel1={'mb-[5px]'}
            dropdownList={cities}
          />
        </div>
        <div className="w-full mt-[12px]">
          <Input label={'Tagline'} />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
