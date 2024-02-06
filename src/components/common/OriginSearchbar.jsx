import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

const  OriginSeachbar = ({ placeholder }) => {
  const { origin, setOrigin } = useTripContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('origin', origin)
  }, [origin])

  const onSubmit = (event)=> {
    event.preventdefault()
    setOrigin(event.target.value)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex justify-between w-1/5 rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="w-fit p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

export default OriginSeachbar;
