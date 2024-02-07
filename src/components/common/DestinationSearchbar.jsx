import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

const  DestinationSeachbar = ({ placeholder }) => {
  const { destination, setDestination } = useTripContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('destination', destination)
  }, [destination])

  const onSubmit = (event)=> {
    event.preventDefault()
    setDestination(inputValue)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex justify-between w-1/5 rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-fit p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

export default DestinationSeachbar;
 