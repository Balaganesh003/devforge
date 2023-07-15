import React, { useState } from 'react';
import SearchDropDown from '@/components/SearchDropDown';
import { useSelector, useDispatch } from 'react-redux';
import { onboardingActions } from '@/store/onboarding-slice';
import MonthYear from './MonthYear';
import DropDown from './DropDown';
import { universities, degrees, collegeSubjects } from '@/data';

const EducationCard = () => {
  const dispatch = useDispatch();

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
        <SearchDropDown
          label1="College/University"
          marginBottomLabel1="mb-[5px]"
          placeholder="Eg : Harvard University"
          dropdownList={universities}
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
          <DropDown options={degrees} label="Degree" />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <SearchDropDown
            label1="Major"
            marginBottomLabel1="mb-[5px]"
            placeholder="Major"
            dropdownList={collegeSubjects}
          />
          {fields.map((field, index) => (
            <SearchDropDown
              key={index}
              label1={`Additional ${field.type}`}
              marginBottomLabel1="mb-[5px]"
              placeholder={`Add ${field.type}`}
              dropdownList={collegeSubjects}
            />
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
