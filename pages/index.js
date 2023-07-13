import { Inter } from 'next/font/google';
import Hero from '../components/Hero';
import Swapper from '../components/Swapper';
import Slider from '../components/Slider';
import HeroCard from '@/components/HeroCard';
import Students from '@/assets/users/students.svg';
import Companies from '@/assets/users/companies.svg';
import Colleges from '@/assets/users/colleges.svg';

const inter = Inter({
  subsets: ['latin'],
});

const HeroCardData = [
  {
    id: 'xsfdfff',
    title: 'For students',
    description:
      'We help candidates showcase their skills and experience to employers as a way to get hired by connecting student experiences to opportunities',
    textColor: 'text-[#0AA482]',
    bgColor: 'bg-[#D1FADF]',
    image: Students,
  },
  {
    id: 'sdgsrf',
    title: 'For companies',
    description:
      'We partner with employers to help companies discover the untapped talent and redefine the way hiring takes place',
    textColor: 'text-[#FF6E76]',
    bgColor: 'bg-[#FFEAE0]',
    image: Companies,
  },
  {
    id: 'sdfg',
    title: 'For colleges / universities',
    description:
      'We collaborate with colleges to transform the educational opportunities and introduce student talents to the industry',
    textColor: 'text-[#693CF3]',
    bgColor: 'bg-[#EFEDFF]',
    image: Colleges,
  },
];

export default function Home() {
  return (
    <main className={` ${inter.className} pb-[9.6rem]`}>
      <Hero />

      <div className="grid gird-cols-1 md:grid-cols-3 mx-auto max-w-[1280px] gap-[4.8rem] md:gap-[3.6rem] small-lg:gap-[4.8rem] px-[2.4rem] md:px-[3.2rem] py-[9.6rem]">
        {HeroCardData.map((item) => (
          <HeroCard key={item.id} {...item} />
        ))}
      </div>
      <Swapper />
      <Slider />
    </main>
  );
}