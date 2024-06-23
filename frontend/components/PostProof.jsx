import React from 'react';
import InputField from './InputField';
import { useState } from 'react';
import TiptapEditor from './TiptapEditor';
import ColouredButton from './ColouredButton';
import Image from 'next/image';
import DragDropLogo from '@/assets/DragDrop.svg';
import UrlField from './UrlField';
import { Toaster, toast } from 'react-hot-toast';

const PostProof = ({ handelModalClose }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postTitleError, setPostTitleError] = useState(false);
  const [postUrl, setPostUrl] = useState('');
  const [postUrlError, setPostUrlError] = useState(false);
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState('');
  const [ourTake, setOurTake] = useState('');

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPostImage(e.target.result);
        console.log(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const data = {
    postTitle,
    postUrl,
    postDescription,
    postImage,
    ourTake,
  };

  const handleSave = () => {
    if (postTitle === '' || postUrlError === true || postDescription === '') {
      toast.error('Please fill all the fields');
    } else {
      toast.success('Post Proof Saved Successfully');
      handelModalClose();
      console.log(data);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="mb-[15px] ">
        <InputField
          label={'Post Title'}
          inputValue={postTitle}
          setInputValue={setPostTitle}
          isEmpty={postTitleError}
          setIsEmpty={setPostTitleError}
          placeholder="Post Title"
        />
      </div>
      <div className="mb-[45px]">
        <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
          Post Description
        </label>
        <TiptapEditor
          setEditorContent={setPostDescription}
          editorContent={postDescription}
          placeholder={'Description'}
        />
      </div>
      <div className="mb-[25px] h-full">
        <div className="border  flex-shrink-0 border-gray-border  w-full h-[10rem] text-center rounded cursor-pointer relative ">
          <div className="w-full h-full flex items-center  justify-center absolute top-0 left-0">
            {postImage ? (
              <Image
                src={postImage}
                alt="Drag and drop"
                width={64}
                height={64}
                className={`   ${'rotate-0 h-full w-full object-contain  bg-white'}`}
              />
            ) : (
              <p className="text-gray-text text-[0.875rem] leading-[130%] flex items-center">
                <span className="mr-1">
                  <Image
                    src={DragDropLogo}
                    alt="Drag and drop"
                    className="h-[0.875rem] w-fit"
                  />
                </span>{' '}
                Drag and drop your resume or
                <span className="text-link font-semibold ml-1 cursor-pointer">
                  browse
                </span>
              </p>
            )}
          </div>
          <input
            type="file"
            id="resumeInput"
            className="w-full h-full  absolute top-0 left-0 cursor-pointer opacity-0"
            onChange={handleFileSelect}
          />
        </div>
      </div>
      <span className="text-center  w-full block text-primary-text font-semibold">
        Or
      </span>
      <div className="mb-[15px]">
        <UrlField
          label={'Add the file Url'}
          Url={postUrl}
          setUrl={setPostUrl}
          UrlError={postUrlError}
          setUrlError={setPostUrlError}
          placeholder="https://www.example.com"
        />
      </div>
      <div className="mb-[35px]">
        <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
          Our take
        </label>
        <TiptapEditor
          setEditorContent={setOurTake}
          editorContent={ourTake}
          placeholder={'Our take'}
        />
      </div>
      <div className="flex justify-end">
        <ColouredButton label={'Save'} className="" handelClick={handleSave} />
      </div>
    </div>
  );
};

export default PostProof;
