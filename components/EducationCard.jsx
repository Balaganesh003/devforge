import React, { useState } from 'react';
import SearchDropDown from '@/components/SearchDropDown';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import MonthYear from './MonthYear';
import DropDown from './DropDown';
import { universities, degrees, collegeSubjects, degreesArray } from '@/data';
import Input from './Input';

const EducationCard = () => {
  const dispatch = useDispatch();

  const [collage, setCollage] = useState('');
  const [degree, setDegree] = useState('');

  const { startPeriod, endPeriod } = useSelector((state) => state.onboarding);

  const setStartPeriod = (value) => {
    dispatch(onboardingActions.setStartPeriod(value));
  };

  const setEndPeriod = (value) => {
    dispatch(onboardingActions.setEndPeriod(value));
  };

  const [fields, setFields] = useState([]);

  const addField = (type) => {
    let no_minor = 0;
    let no_major = 0;
    fields.forEach((field) => {
      if (field.type === 'Minor') {
        no_minor++;
      } else if (field.type === 'Major') {
        no_major++;
      }
    });
    if (
      (type === 'Minor' && no_minor === 2) ||
      (type === 'Major' && no_major === 1)
    )
      return;

    console.log(type);
    setFields([...fields, { type }]);
  };

  return (
    <div className="w-full ">
      <div className="mb-4">
        <Input
          label="College/University"
          placeholder="Eg : Harvard University"
          inputValue={collage}
          setInputValue={setCollage}
        />
      </div>

      <div className="flex gap-6 mb-4">
        <div className="flex-1">
          <MonthYear
            label="Start year"
            period={startPeriod}
            setPeriod={setStartPeriod}
          />
        </div>
        <div className="flex-1">
          <MonthYear
            label="Graduation Year"
            period={endPeriod}
            setPeriod={setEndPeriod}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex-1 ">
          <Input
            placeholder="Eg : Bachelor of Business Administration(BBA)"
            label="Degree"
            inputValue={degree}
            setInputValue={setDegree}
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Input
            label="Major"
            placeholder="Eg : Computer Science Engineering"
          />
          {fields.map((field, index) => (
            <div key={index} className="relative">
              <Input
                label={`Additional ${field.type}`}
                placeholder={`Add ${field.type}`}
              />
              <button
                className="absolute top-0 right-0  leading-[130%] text-text-red  text-[0.875rem] "
                onClick={() => removeSchool(index)}>
                <span className="ml-1 leading-[130%]">Remove {field.type}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full justify-end gap-3 mt-[5px]">
        <button
          className="text-[0.875rem] leading-[130%] text-[#0064E1] font-medium"
          onClick={() => addField('Major')}>
          Add a major
        </button>
        <button
          className="text-[0.875rem] leading-[130%] text-[#0064E1] font-medium"
          onClick={() => addField('Minor')}>
          Add a minor
        </button>
      </div>
    </div>
  );
};

export default EducationCard;
