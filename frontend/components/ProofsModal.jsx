import React from 'react';
import { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useState } from 'react';
import DropDown from './DropDown';
import PostProof from './PostProof';
import RedditProof from './RedditProof';

const proofsList = ['Post', 'Reddit'];

const ProofsModal = ({ choosenProof, setChoosenProof, handelModalClose }) => {
  return (
    <div className="h-full">
      <>
        <h1 className="text-[1.25rem]  leading-[1.375rem] font-semibold text-primary-text">
          Add Proof
        </h1>
        <div
          className={`${
            choosenProof === null ? 'mb-[5rem]' : 'mb-[15px]'
          } w-1/2 lg:w-1/3`}>
          <DropDown
            dropdownList={proofsList}
            selectedValue={choosenProof}
            setSelectedValue={setChoosenProof}
          />
        </div>
      </>

      {choosenProof === 'Post' && (
        <PostProof handelModalClose={handelModalClose} />
      )}
      {choosenProof === 'Reddit' && (
        <RedditProof handelModalClose={handelModalClose} />
      )}
    </div>
  );
};

export default ProofsModal;
