import { useEffect, useState } from 'react';
import React from 'react';
import UrlField from './UrlField';
import DownArrow from '@/assets/BlackDownArrow.svg';
import Image from 'next/image';
import LogoLinkedin from '@/assets/linkedin.svg';
import LogoTwitter from '@/assets/twitter.svg';
import LogoGithub from '@/assets/github.svg';
import LogoInstagram from '@/assets/instagram.svg';
import LogoTelegram from '@/assets/telegram.svg';
import LogoMedium from '@/assets/medium.svg';
import LogoYoutube from '@/assets/youtube.svg';
import LogoTiktok from '@/assets/tiktok.svg';
import LogoDribble from '@/assets/dribble.svg';
import LogoBehance from '@/assets/behance.svg';
import Website from '@/assets/website.svg';
import Delete from '@/assets/Delete.svg';
import DeleteRed from '@/assets/DeleteRed.svg';

const SocialLinkList = [
  { name: 'Website', logo: Website },
  { name: 'Twitter', logo: LogoTwitter },
  { name: 'LinkedIn', logo: LogoLinkedin },
  { name: 'GitHub', logo: LogoGithub },
  { name: 'Instagram', logo: LogoInstagram },
  { name: 'Telegram', logo: LogoTelegram },
  { name: 'Medium', logo: LogoMedium },
  { name: 'YouTube', logo: LogoYoutube },
  { name: 'TikTok', logo: LogoTiktok },
  { name: 'Dribbble', logo: LogoDribble },
  { name: 'Behance', logo: LogoBehance },
];

const SocialLinkCard = ({ item, deleteLink, index }) => {
  const [link, setLink] = useState(item.link);
  const [linkError, setLinkError] = useState(false);
  const [linkType, setLinkType] = useState({
    name: item.name,
    logo: item.logo,
  });

  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = (type) => {
    setShowDropDown(!showDropDown);
    setLinkType(type);
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="relative flex-shrink-0">
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className=" h-11 bg-white cursor-pointer rounded flex items-center px-2 gap-2 mb-[13px] relative  border border-[#d7d7d7] ">
          <Image
            src={linkType?.logo || Website}
            alt="Bookmarklogo"
            width={28}
            height={28}
          />
          <Image src={DownArrow} alt="Bookmarklogo" width={12} />
        </div>
        {showDropDown && (
          <div className="rounded-md overflow-visiable absolute border  w-[10rem] z-10 top-[90%] ">
            <div className=" py-2 bg-white  h-[calc(100vh-29.5rem)]  overflow-y-auto">
              {SocialLinkList.map((item, index) => (
                <div
                  onClick={() => handleDropDown(item)}
                  key={index}
                  className="flex items-center gap-4 p-2 hover:bg-[#fafafa] cursor-pointer">
                  <Image
                    src={item.logo}
                    alt="Bookmarklogo"
                    width={20}
                    height={20}
                  />
                  <p className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full">
        <UrlField
          errorMessage={'Invalid Url'}
          Url={link}
          placeholder={'https://www.example.com'}
          setUrl={setLink}
          UrlError={linkError}
          setUrlError={setLinkError}
        />
      </div>
      <div
        onClick={() => deleteLink(index)}
        className=" rounded-full h-[48px] pr-3 flex items-center flex-shrink-0 mb-[15px] cursor-pointer group -mr-3 transition-all  ease-in-out-expo">
        <Image
          src={DeleteRed}
          alt="Bookmarklogo"
          width={20}
          height={20}
          className="group-hover:opacity-[100%] scale-110  group-hover:block hidden opacity-0 transition-all duration-300 ease-in-out"
        />
        <Image
          src={Delete}
          alt="Bookmarklogo"
          width={20}
          height={20}
          className="group-hover:opacity-0 group-hover:hidden block opacity-[100%] transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SocialLinkCard;
