import React, { useState } from 'react';
import Image from 'next/image';
import plusLogo from '@/assets/PlusLogo.svg';

import ErrorIcon from '../assets/exclamatory.svg';
import SocialUrlCard from './SocialUrlCard';
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
import SocialLinkCard from './SocialLinkCard';

const SocialLinks = [
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

const SocialLinkList = [
  { name: 'Twitter', logo: LogoTwitter, link: '' },
  { name: 'LinkedIn', logo: LogoLinkedin, link: '' },
  { name: 'GitHub', logo: LogoGithub, link: '' },
  { name: 'Instagram', logo: LogoInstagram, link: '' },
];

const SocialDetails = () => {
  const [twitterUrl, setTwitterUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [twitterUrlError, setTwitterUrlError] = useState(false);
  const [linkedinUrlError, setLinkedinUrlError] = useState(false);
  const [githubUrlError, setGithubUrlError] = useState(false);
  const [instagramUrlError, setInstagramUrlError] = useState(false);

  const [allLinks, setAllLinks] = useState([]);

  const addotherLinks = () => {
    setAllLinks([
      ...allLinks,
      {
        id: `${Math.floor(Math.random() * 1000 + 1)}`,
        logo: Website,
        link: '',
      },
    ]);
  };

  const deleteLink = (index) => {
    const newLinks = [...allLinks];
    const filteredList = newLinks.filter((item, i) => item.id != index);
    setAllLinks(filteredList);
  };

  return (
    <div className="max-w-[520px] mx-auto">
      <div>
        <div></div>
      </div>
      <div>
        <SocialUrlCard
          label={'Instagram'}
          errorMessage={'Please enter a valid URL'}
          Url={instagramUrl}
          logo={LogoInstagram}
          setUrl={setInstagramUrl}
          UrlError={instagramUrlError}
          setUrlError={setInstagramUrlError}
          placeholder={'https://www.instagram.com/'}
        />

        <SocialUrlCard
          label={'Twitter'}
          errorMessage={'Please enter a valid URL'}
          Url={twitterUrl}
          logo={LogoTwitter}
          setUrl={setTwitterUrl}
          UrlError={twitterUrlError}
          setUrlError={setTwitterUrlError}
          placeholder={'https://www.twitter.com/'}
        />

        <SocialUrlCard
          label={'LinkedIn'}
          errorMessage={'Please enter a valid URL'}
          Url={linkedinUrl}
          setUrl={setLinkedinUrl}
          logo={LogoLinkedin}
          UrlError={linkedinUrlError}
          setUrlError={setLinkedinUrlError}
          placeholder={'https://www.linkedin.com/'}
        />

        <SocialUrlCard
          label={'GitHub'}
          errorMessage={'Please enter a valid URL'}
          Url={githubUrl}
          logo={LogoGithub}
          setUrl={setGithubUrl}
          UrlError={githubUrlError}
          setUrlError={setGithubUrlError}
          placeholder={'https://www.github.com/'}
        />
      </div>
      <div className="flex flex-col gap-6 mt-[2.5rem]">
        {allLinks.map((item, i) => (
          <SocialLinkCard
            key={i}
            item={item}
            index={item.id}
            deleteLink={deleteLink}
          />
        ))}
      </div>
      <div
        onClick={() => addotherLinks()}
        className="flex gap-1 items-center pl-[14px] mt-[2.75rem] pr-[16px] max-h-[3rem] h-[2.5rem] border border-black rounded hover:-translate-y-0.5   hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer justify-center ">
        <Image
          src={plusLogo}
          alt="Bookmarklogo"
          width={16}
          height={16}
          className="w-4 h-[14px]"
        />
        <p className="text-[0.875rem] leading-[130%]  text-primary-text font-semibold">
          Add
        </p>
      </div>
    </div>
  );
};

export default SocialDetails;
