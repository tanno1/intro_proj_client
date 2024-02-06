import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

const NewSearchbar = ({ placeholder }) => {
  const {destination, setDestination } = useTripContext

  useEffect(() => {
    console.log('destination', destination)
  }, [destination])

  return (
    <div>
      <form onSubmit={setDestination} className="flex justify-between w-1/5 rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          className="w-fit p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

export default NewSearchbar;
