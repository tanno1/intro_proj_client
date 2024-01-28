import React from 'react';

const SubmitButton = () => {
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="w-1/4 bg-myDarkGray hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-xl"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
