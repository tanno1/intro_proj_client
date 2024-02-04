import React, { useState } from 'react';

const AccomodationsDropdown = ({ placeholder, onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedRange, setSelectedRange] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm, selectedRange);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDropdownChange = (range) => {
    setSearchTerm(range);
    setSelectedRange(range);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative flex flex-col justify-between rounded-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
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
