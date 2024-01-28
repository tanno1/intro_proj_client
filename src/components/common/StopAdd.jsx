import React from 'react';
import SubmitButton from './SubmitButton';

const StopAdd = () => {
  return (
    <div className="flex justify-between w-1/5 rounded-xl">
      <input
        type="text"
        placeholder="Add a stop..."
        className="w-3/4 p-2 outline-none rounded-l-xl bg-myGray"
      />
      <SubmitButton />
    </div>
  );
};

export default StopAdd;
