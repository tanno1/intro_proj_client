import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

const  OriginSeachbar = ({ placeholder }) => {
  const { origin, setOrigin } = useTripContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('origin', origin)
  }, [origin])

  const onSubmit = (event) => {
    event.preventDefault()
    setOrigin(inputValue)
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

export default OriginSeachbar;
 
