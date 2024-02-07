import React, { useState, useEffect } from 'react';
import { useTripContext } from '../../context/tripcontext';

const BudgetDropdown = ({ placeholder }) => {
  const { budget, setBudget } = useTripContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    console.log('budget', budget)
  }, [budget])

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const handleDropdownChange = (range) => {
    setSearchTerm(range);
    setBudget(range);
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
          onChange={(e) => setBudget(e.target.value)}
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
