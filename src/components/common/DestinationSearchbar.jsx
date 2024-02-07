import React, { useEffect, useState } from 'react';
import { useTripContext } from '../../context/tripcontext';

<<<<<<< HEAD
const  DestinationSeachbar = ({ placeholder }) => {
  const { destination, setDestination } = useTripContext();
  const [inputValue, setInputValue] = useState('');
=======
const NewSearchbar = ({ placeholder }) => {
  const {destination, setDestination } = useTripContext
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8

  useEffect(() => {
    console.log('destination', destination)
  }, [destination])

<<<<<<< HEAD
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
=======
  return (
    <div>
      <form onSubmit={setDestination} className="flex justify-between w-1/5 rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8
          className="w-fit p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

<<<<<<< HEAD
export default DestinationSeachbar;
 
=======
export default NewSearchbar;
>>>>>>> da58bb771d0e1c6cc95c4870aef0af86761e68d8
