import React, { useState } from 'react';
import EducationCard from '@/components/EducationCard';
import BluePlusLogo from '@/assets/BluePlusLogo.svg';
import Image from 'next/image';

const Education = () => {
  const [schools, setSchools] = useState([{}]);

  const addSchool = () => {
    setSchools([...schools, {}]);
    console.log(schools);
  };

  const removeSchool = (index) => {
    const updatedSchools = [...schools];
    updatedSchools.splice(index, 1);
    setSchools(updatedSchools);
  };

  return (
    <div className="w-full h-full mx-auto  pb-[2.75rem]">
      <div>
        <div className="flex flex-col gap-[2.75rem]">
          {schools.map((school, index) => (
            <div key={index} className="relative ">
              <EducationCard school={school} />
              {index > 0 && (
                <button
                  className="absolute top-0 right-0  leading-[130%] text-text-red  text-[0.875rem] "
                  onClick={() => removeSchool(index)}>
                  <span className="ml-1 leading-[130%]">Remove School</span>
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="">
          <button
            className="text-[0.875rem] px-[1rem] p-[0.5rem] rounded-full leading-[130%] text-[#0064E1] font-medium border border-[#0064E1] flex items-center"
            onClick={addSchool}>
            <Image src={BluePlusLogo} alt="plus logo" className="w-3 h-3" />
            <span className="ml-1 leading-[130%]"> Add another Education</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
