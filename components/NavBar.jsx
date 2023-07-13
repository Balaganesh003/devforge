import React from 'react';
import Image from 'next/image';
import HamburgerLogo from '@/assets/HamBurgerLogo.svg';
import BrandLogo from '@/assets/brand-logo-combined.svg';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { uiActions } from '@/store/ui-slice';

const NavBar = ({ setShowSideBar, showSideBar }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => setShowSideBar(!showSideBar)}
      className="h-[4.75rem] w-full sticky top-0  lg:hidden bg-white flex items-center shadow-nav z-50">
      <div onClick={() => dispatch(uiActions.toggleSidebar())} className="mx-6">
        <Image
          src={HamburgerLogo}
          alt="Hamburger Logo"
          className="w-[14px] h-[20px] cursor-pointer"
        />
      </div>
      <div className="cursor-pointer">
        <Link href="/">
          <Image
            src={BrandLogo}
            alt="Hamburger Logo"
            className="w-fit h-[20px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
