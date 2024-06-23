import React from 'react';
import Image from 'next/image';
import GoogleLogo from '@/assets/google.svg';
import MicrosoftLogo from '@/assets/microsoft.svg';
import NetflixLogo from '@/assets/netflix.svg';
import AmazonLogo from '@/assets/amazon.svg';
import AppleLogo from '@/assets/apple.svg';
import MetaLogo from '@/assets/meta.svg';
import TeslaLogo from '@/assets/tesla.svg';
import TiktokLogo from '@/assets/tiktoklogo.svg';
import CoinbaseLogo from '@/assets/coinbase.svg';
import AdobeLogo from '@/assets/adobe.svg';

const AuthBanner = () => {
  return (
    <div>
      <h1 className="font-CabinetGrotesk-Medium text-[1.5rem] sm:text-[1.75rem] tracking-tight leading-[1.5]">
        Helping students get one step closer to their dream companies
      </h1>
      <div className="grid grid-cols-4  grid-rows-2 md:grid-cols-5 gap-6 w-fit mt-8">
        <Image src={GoogleLogo} alt="Google Logo" />
        <Image src={MicrosoftLogo} alt="Microsoft Logo" />
        <Image src={NetflixLogo} alt="Netflix Logo" />
        <Image src={AmazonLogo} alt="Amazon Logo" />
        <Image src={AppleLogo} alt="Apple Logo" />
        <Image src={MetaLogo} alt="Meta Logo" />
        <Image src={TeslaLogo} alt="Tesla Logo" />
        <Image src={TiktokLogo} alt="Tiktok Logo" />
        <Image
          src={CoinbaseLogo}
          alt="Coinbase Logo"
          className="hidden md:block"
        />
        <Image src={AdobeLogo} alt="Adobe Logo" className="hidden md:block" />
      </div>
    </div>
  );
};

export default AuthBanner;
