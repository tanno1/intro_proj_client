import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

const  OriginSeachbar = ({ placeholder }) => {
  const { origin, setOrigin } = useTripContext();
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    console.log('origin', origin)
  }, [origin])

<<<<<<< HEAD
  const onSubmit = (event) => {
    event.preventDefault()
    setOrigin(inputValue)
=======
  const onSubmit = (event)=> {
    event.preventdefault()
    setOrigin(event.target.value)
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex justify-between w-1/5 rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
<<<<<<< HEAD
          onChange={(e) => setInputValue(e.target.value)}
=======
          onChange={handleChange}
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8
          className="w-fit p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

export default OriginSeachbar;
<<<<<<< HEAD
 
=======
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8
