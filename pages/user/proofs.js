import React from 'react';
import { useState } from 'react';
import ModalLayout from '@/components/ModalLayout';
import ProofsModal from '@/components/ProofsModal';
import parser from 'html-react-parser';

const allProofs = [
  {
    id: 1,
    postTitle:
      'Growing F&B startup team - Looking for data analysts (all levels of experience welcome)!',
    ourTake: '<P>We are looking for a data analyst to join our team!</P>',
  },
];

const Proofs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choosenProof, setChoosenProof] = useState(null);

  const handelModalOpen = () => {
    setIsModalOpen(true);
    setChoosenProof(null);
    document.body.style.overflow = 'hidden';
  };

  const handelModalClose = () => {
    setIsModalOpen(false);
    setChoosenProof(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <div className=" bg-white overflow-y-auto">
        <div className="max-w-[62.5rem] w-full   mx-auto z-0">
          <div className="lg:pt-[2.25rem] p-[0.9375rem] ">
            <div className="flex justify-end">
              <div
                onClick={() => handelModalOpen()}
                className="px-[14.5px] flex-shrink-0 py-[6px] my-[4px] mr-2 border border-black rounded w-fit h-[35px]">
                <p className="text-[0.875rem] leading-[150%] font-semibold text-primary-text captilize cursor-pointer">
                  Add Proofs
                </p>
              </div>
            </div>
          </div>
          {/* Proofs */}
          {allProofs.map((proof, i) => (
            <div
              key={i}
              className="flex gap-[15px] flex-col w-[66%] mx-4 pb-12">
              <div
                onClick={() => setIsModalOpen(true)}
                className="mt-[1rem] bg-white p-[2rem] min-h-[5.8125rem] rounded-lg shadow-nav hover:scale-[101%] transform transition-all duration-200 ease-in-out-expo w-full flex cursor-pointer ">
                <p className="text-[1rem] leading-[150%] text-secondary-text">
                  {proof.postTitle}
                </p>
              </div>

              <div className="w-full">
                <div className="ml-[5rem]  bg-green-500/10 shadow-green-500 p-[2rem] min-h-[5.8125rem] rounded-lg shadow-comment flex cursor-pointer ">
                  {parser(proof.ourTake)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <ModalLayout isModalOpen={isModalOpen} handelClose={handelModalClose}>
        <ProofsModal
          choosenProof={choosenProof}
          setChoosenProof={setChoosenProof}
          handelModalClose={handelModalClose}
        />
      </ModalLayout>
    </div>
  );
};

export default Proofs;
