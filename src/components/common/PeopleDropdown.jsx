import React, { useState, useEffect } from 'react';
import { useTripContext } from '../../context/tripcontext';

const AccomodationsDropdown = ({ placeholder }) => {
  const { numPeople, setNumPeople } = useTripContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    console.log('numPeople', numPeople)
  }, [numPeople])

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleDropdownChange = (range) => {
    setSearchTerm(range);
    setNumPeople(range);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="relative flex flex-col justify-between rounded-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setNumPeople(e.target.value)}
          onFocus={toggleDropdown}
          placeholder={placeholder}
          className="w-fit p-2 outline-none rounded-xl bg-myGray relative"
        />
        {showDropdown && (
          <div className="dropdown absolute top-full left-0 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-300 z-10">
            <ul>
              <li onClick={() => handleDropdownChange('1')} className="p-2 cursor-pointer hover:bg-myGray">1</li>
              <li onClick={() => handleDropdownChange('2')} className="p-2 cursor-pointer hover:bg-myGray">2</li>
              <li onClick={() => handleDropdownChange('3')} className="p-2 cursor-pointer hover:bg-myGray">3</li>
              <li onClick={() => handleDropdownChange('4+')} className="p-2 cursor-pointer hover:bg-myGray">4+</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default AccomodationsDropdown;
