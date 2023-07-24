import React, { useState } from 'react';
import DragDrop from './DragDrop';

const Verification = () => {
  const [document, setDocument] = useState('');

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDocument(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="h-[200px] mb-[2.25rem]">
      <label className="text-primary-text text-[0.875rem] leading-[150%] font-semibold inline-block mb-[0.375rem]">
        Add your documents
      </label>
      <DragDrop handleFileSelect={handleFileSelect} document={document} />
    </div>
  );
};

export default Verification;
