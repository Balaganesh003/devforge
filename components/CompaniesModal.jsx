import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import CrossLogoWhite from '@/assets/crossLogoWhite.svg';
import crossLogoGray from '@/assets/crossLogoGray.svg';
import { useDispatch } from 'react-redux';
import InputField from '@/components/InputField';
import DropDown from './DropDown';
import Input from './Input';
import UrlField from './UrlField';
import TiptapEditor from '@/components/TiptapEditor';
import ColouredButton from './ColouredButton';
import { companyActions } from '@/store/company-slice';

const companySizeOptions = [
  '< 10 employees',
  '10-50 employees',
  '51-100 employees',
  '101-500 employees',
  '501-1000 employees',
  '1001-10000 employees',
  '10000+ employees',
];

const CompaniesModal = ({ handelModalClose, isModalOpen }) => {
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState(false);
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [companyWebsiteError, setCompanyWebsiteError] = useState(false);
  const [companyDescription, setCompanyDescription] = useState('');
  const [companyLogo, setCompanyLogo] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [companyTagline, setCompanyTagline] = useState('');
  const [companyLinkedinUrl, setCompanyLinkedinUrl] = useState('');
  const [companyLinkedinUrlError, setCompanyLinkedinUrlError] = useState(false);
  const [companyCarreerUrl, setCompanyCarreerUrl] = useState('');
  const [companyCarreerUrlError, setCompanyCarreerUrlError] = useState(false);
  const [companyAstCareerUrl, setCompanyAstCareerUrl] = useState('');
  const [companyAstCareerUrlError, setCompanyAstCareerUrlError] =
    useState(false);
  const [companyKeyWords, setCompanyKeyWords] = useState('');
  const [aboutCompany, setAboutCompany] = useState('');

  const handelClose = () => {
    handelClear();
    handelModalClose();
  };

  const companyObject = {
    id: `${Math.floor(Math.random() * 1000000000000000)}`,
    companyName,
    companyWebsite,
    companyDescription,
    companyLogo,
    companySize,
    companyTagline,
    companyLinkedinUrl,
    companyCarreerUrl,
    companyAstCareerUrl,
    companyKeyWords,
    aboutCompany,
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyLogo(e.target.result);
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handelClear = () => {
    setCompanyName('');
    setCompanyWebsite('');
    setCompanyDescription('');
    setCompanyLogo('');
    setCompanySize('');
    setCompanyTagline('');
    setCompanyLinkedinUrl('');
    setCompanyCarreerUrl('');
    setCompanyAstCareerUrl('');
    setCompanyKeyWords('');
    setAboutCompany('');
    setCompanyNameError(false);
    setCompanyWebsiteError(false);
    setCompanyLinkedinUrlError(false);
    setCompanyCarreerUrlError(false);
    setCompanyAstCareerUrlError(false);
  };

  const handleSave = () => {
    if (
      companyName === '' ||
      companyNameError === true ||
      companyWebsiteError === true ||
      companyLinkedinUrlError === true ||
      companyCarreerUrlError === true ||
      companyAstCareerUrlError === true ||
      companyLogo === ''
    ) {
      toast.error('Company name and Logo is required');
      return;
    } else {
      dispatch(companyActions.addCompany(companyObject));
      toast.success('Company added successfully');
      handelClear();
      handelModalClose();
    }
  };

  return (
    <div
      className={`min-w-screen min-h-screen w-full h-full fixed top-0 left-0 bg-black/50  z-[200] flex items-center justify-center transform mobile-lg:p-[3rem] sm:px-[6rem] ${
        isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
      }`}>
      <Toaster />
      <div
        className={`block mobile-lg:rounded-lg min-h-screen mobile-lg:min-h-fit bg-white mobile-lg:max-w-[64rem] w-full transform duration-[300ms]   ${
          isModalOpen ? ' scale-[100%] opacity-[100]' : ' scale-0 opacity-0'
        } overflow-x-hidden`}>
        <div className="block mobile-lg:rounded-lg  bg-primary mobile-lg:max-w-[64rem] w-full  max-h-screen overflow-y-auto relative min-h-[5rem] px-2 mobile-md:px-4 mobile-lg:px-6 md:px-8 py-8">
          {/* CloseLogo */}
          <div
            onClick={() => handelClose()}
            className="p-[9px] bg-black/[15%] rounded-full absolute  top-[24px]  right-[24px] cursor-pointer group hover:scale-[125%] hover:bg-black/10 transition-all duration-300">
            <Image
              src={CrossLogoWhite}
              alt="Cross Logo"
              className={` w-[14px] h-[14px]`}
            />
          </div>
          {/* content */}
          <div>
            <h1 className="text-[1.25rem] mb-[15px] leading-[1.375rem] font-semibold text-primary-text">
              About the company
            </h1>
            {/* Logo and company name */}
            <div className="flex w-full flex-col md:flex-row gap-8 items-center">
              <div className="border  flex-shrink-0 border-gray-border  w-[9rem] h-[9rem]  text-center rounded cursor-pointer relative ">
                <div className="w-full h-full flex items-center  justify-center absolute top-0 left-0">
                  <Image
                    src={companyLogo || crossLogoGray}
                    alt="Drag and drop"
                    width={64}
                    height={64}
                    className={`   ${
                      companyLogo
                        ? 'rotate-0 h-full w-full object-contain  bg-white'
                        : 'rotate-45 h-[4rem] w-[4rem]'
                    }`}
                  />
                </div>
                <input
                  type="file"
                  id="resumeInput"
                  className="w-full h-full  absolute top-0 left-0 cursor-pointer opacity-0"
                  onChange={handleFileSelect}
                />
              </div>
              <div className="flex flex-grow flex-col w-full">
                <div className="flex lg:gap-8 flex-col lg:flex-row">
                  <div className="w-full flex-1 basis-[65%]">
                    <InputField
                      label={'Company name'}
                      placeholder={'Company name'}
                      errorMessage={'Company Name is required'}
                      inputValue={companyName}
                      setInputValue={setCompanyName}
                      isEmpty={companyNameError}
                      setIsEmpty={setCompanyNameError}
                    />
                  </div>
                  <div className="w-full flex-1 basis-[45%]">
                    <DropDown
                      label1={'Team Size'}
                      placeholder={'Team Size'}
                      dropdownList={companySizeOptions}
                      selectedValue={companySize}
                      setSelectedValue={setCompanySize}
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <Input
                    label={'tagline'}
                    placeholder={'Tagline'}
                    inputValue={companyTagline}
                    setInputValue={setCompanyTagline}
                  />
                </div>
              </div>
            </div>
            {/* company urls */}
            <div className="grid md:grid-cols-2 gap-x-8">
              <UrlField
                label={'Company website'}
                errorMessage={'Invalid Url'}
                placeholder={'Company website'}
                Url={companyWebsite}
                setUrl={setCompanyWebsite}
                UrlError={companyWebsiteError}
                setUrlError={setCompanyWebsiteError}
              />
              <UrlField
                label={'Company Linkedin'}
                errorMessage={'Invalid Url'}
                placeholder={'Company Linkedin'}
                Url={companyLinkedinUrl}
                setUrl={setCompanyLinkedinUrl}
                UrlError={companyLinkedinUrlError}
                setUrlError={setCompanyLinkedinUrlError}
              />
              <UrlField
                label={'Carreers page'}
                placeholder={'Carreers page'}
                errorMessage={'Invalid Url'}
                Url={companyCarreerUrl}
                setUrl={setCompanyCarreerUrl}
                UrlError={companyCarreerUrlError}
                setUrlError={setCompanyCarreerUrlError}
              />
              <UrlField
                label={'AST Carreers page'}
                errorMessage={'Invalid Url'}
                placeholder={'AST Carreers page'}
                Url={companyAstCareerUrl}
                setUrl={setCompanyAstCareerUrl}
                UrlError={companyAstCareerUrlError}
                setUrlError={setCompanyAstCareerUrlError}
              />
            </div>
            {/* Key words */}
            <div>
              <Input
                label={'Keywords'}
                placeholder={'Keywords'}
                inputValue={companyKeyWords}
                setInputValue={setCompanyKeyWords}
              />
            </div>
            {/* company description */}
            <div className="mb-[15px]">
              <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
                About Company
              </label>
              <TiptapEditor
                setEditorContent={setAboutCompany}
                editorContent={aboutCompany}
              />
            </div>
            <div className="mb-[25px]">
              <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
                Company Description
              </label>
              <TiptapEditor
                setEditorContent={setCompanyDescription}
                editorContent={companyDescription}
              />
            </div>
            {/* Save Button */}
            <div className="flex justify-end">
              <ColouredButton
                label={'Save'}
                className=""
                handelClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesModal;
