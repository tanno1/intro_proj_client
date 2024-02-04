import React, { useState } from 'react';

const BudgetDropdown = ({ placeholder, onSubmit }) => {
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
              <li onClick={() => handleDropdownChange('Under $50')} className="p-2 cursor-pointer hover:bg-gray-200">Under $50</li>
              <li onClick={() => handleDropdownChange('$50 - $100')} className="p-2 cursor-pointer hover:bg-gray-200">$50 - $100</li>
              <li onClick={() => handleDropdownChange('$100 - $200')} className="p-2 cursor-pointer hover:bg-gray-200">$100 - $200</li>
              <li onClick={() => handleDropdownChange('Over $200')} className="p-2 cursor-pointer hover:bg-gray-200">Over $200</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default BudgetDropdown;
