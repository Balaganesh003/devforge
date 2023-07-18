import React, { useState } from 'react';
import Image from 'next/image';
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
    </div>
  );
};

export default SocialDetails;
