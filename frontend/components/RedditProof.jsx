import React from 'react';
import InputField from './InputField';
import { useState } from 'react';
import TiptapEditor from './TiptapEditor';
import ColouredButton from './ColouredButton';
import Image from 'next/image';
import DragDropLogo from '@/assets/DragDrop.svg';
import UrlField from './UrlField';
import { Toaster, toast } from 'react-hot-toast';

const RedditProof = ({ handelModalClose }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postTitleError, setPostTitleError] = useState(false);
  const [postUrl, setPostUrl] = useState('');
  const [postUrlError, setPostUrlError] = useState(false);
  const [postDescription, setPostDescription] = useState('');
  const [postImage, setPostImage] = useState('');
  const [ourTake, setOurTake] = useState('');
  const [redditPostUrl, setRedditPostUrl] = useState('');
  const [redditPostUrlError, setRedditPostUrlError] = useState(false);
  const [redditUsername, setRedditUsername] = useState('');
  const [redditUsernameError, setRedditUsernameError] = useState(false);
  const [comments, setComments] = useState([{ userName: '', comment: '' }]);

  const addComment = () => {
    setComments((prevComments) => [
      ...prevComments,
      { userName: '', comment: '' },
    ]);
  };

  const deleteComment = () => {
    comments.length > 1 &&
      setComments((prevComments) => prevComments.slice(0, -1));
  };

  const updateComment = (index, field, value) => {
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index][field] = value;
      return updatedComments;
    });
  };

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
    redditPostUrl,
    redditUsername,
    comments,
  };

  const handleSave = () => {
    if (
      postTitle === '' ||
      postUrlError === true ||
      postDescription === '' ||
      redditUsername === '' ||
      redditUsernameError === true
    ) {
      toast.error('Please fill all the required fields');
    } else {
      toast.success('Reddit Proof Saved Successfully');
      handelModalClose();
      console.log(data);
    }
  };

  return (
    <div>
      <Toaster />
      <div className="flex gap-[15px] w-full">
        <div className="flex-1 basis-[66%]">
          <UrlField
            label={'Reddit Post URL'}
            Url={redditPostUrl}
            setUrl={setRedditPostUrl}
            UrlError={redditPostUrlError}
            setUrlError={setRedditPostUrlError}
            placeholder="Reddit Post URL"
          />
        </div>
        <div className="flex-1 basis-[44%]">
          <InputField
            label={'Reddit Username'}
            inputValue={redditUsername}
            setInputValue={setRedditUsername}
            isEmpty={redditUsernameError}
            setIsEmpty={setRedditUsernameError}
            placeholder="Reddit Username"
            errorMessage="Please enter a valid Reddit Username"
          />
        </div>
      </div>
      <div className="mb-[15px] ">
        <InputField
          label={'Post Title'}
          inputValue={postTitle}
          setInputValue={setPostTitle}
          inputError={postTitleError}
          setInputError={setPostTitleError}
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
      <div className="mb-[15px]">
        <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
          Add comments
        </label>
        <div className="flex flex-col gap-[15px]">
          {comments.map((comment, index) => (
            <TiptapEditor
              key={index}
              editorContent={comment.comment}
              setEditorContent={(value) =>
                updateComment(index, 'comment', value)
              }
              placeholder={'Add a comment'}
              username={comment.userName}
              setUsername={(value) => updateComment(index, 'userName', value)}
              isUsername={true}
            />
          ))}
        </div>
        <div className="flex justify-end gap-[15px] mt-[15px] ">
          <div
            onClick={deleteComment}
            className="flex  gap-1 items-center pl-[14px] pr-[16px] max-h-[3rem] h-[2.5rem] border border-black rounded hover:-translate-y-0.5  hover:shadow-button ease-in-out-expo transform transition-transform duration-150 cursor-pointer">
            <p className="text-[0.875rem] leading-[130%] text-primary-text font-semibold">
              Delete comment
            </p>
          </div>
          <div className="">
            <ColouredButton label={'Add comment'} handelClick={addComment} />
          </div>
        </div>
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

export default RedditProof;
