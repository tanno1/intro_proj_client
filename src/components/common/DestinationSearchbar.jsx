import React, { useEffect, useState, useRef } from 'react';
import { useTripContext } from '../../context/tripcontext';

const  DestinationSeachbar = ({ placeholder }) => {
  const { destination, setDestination } = useTripContext();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  useEffect(() => {
    console.log('destination', destination)
  }, [destination])

  useEffect(() => {
    if (inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocompleteRef.current = autocomplete;

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        setDestination(place.formatted_address);
      });
    }
  }, [setDestination]);

  const handleInputChange = (e) => { 
    setInputValue(e.target.value);
    if (autocompleteRef.current) {
      autocompleteRef.current.setFields(['formatted_address']);
    }
  };

  return (
    <div>
      <form className="flex justify-between rounded-xl">
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          ref={inputRef}
          className="w-full p-2 outline-none rounded-xl bg-myGray"
        />
      </form>
    </div>
  );
};

export default DestinationSeachbar;
 
