import React, { useState, useEffect } from 'react';
import { useTripContext } from '../../context/tripcontext';

const AccomodationsDropdown = ({ placeholder }) => {
  const { accomomodation, setAccomomodation } = useTripContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('accomomodation', accomomodation)
  }, [accomomodation])

  const onSubmit = (event) => {
    event.preventDefault();
    onChange(searchTerm, selectedRange);
  };

  const handleDropdownChange = (range) => {
    setSearchTerm(range);
    setAccomomodation(range);
    setShowDropdown(false);  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="relative flex flex-col justify-between rounded-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setAccomomodation(e.target.value)}
          onFocus={toggleDropdown}
          placeholder={placeholder}
          className="w-fit p-2 outline-none rounded-xl bg-myGray relative"
        />
        {showDropdown && (
          <div className="dropdown absolute top-full left-0 mt-2 w-full rounded-md shadow-lg bg-white border border-gray-300">
            <ul>
              <li onClick={() => handleDropdownChange('Camp')} className="p-2 cursor-pointer hover:bg-myGray">Camp</li>
              <li onClick={() => handleDropdownChange('Hotel')} className="p-2 cursor-pointer hover:bg-myGray">Hotel</li>
              <li onClick={() => handleDropdownChange('Rental')} className="p-2 cursor-pointer hover:bg-myGray">Rental</li>
              <li onClick={() => handleDropdownChange('RV')} className="p-2 cursor-pointer hover:bg-myGray">RV</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default AccomodationsDropdown;
