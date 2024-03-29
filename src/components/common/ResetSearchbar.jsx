import React, { useState } from 'react';

const ResetSearchbar = ({ placeholder, onSubmit, addedTags, onRemoveTag, onFocus, onBlur }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
    setSearchTerm(''); // Clear input after submission
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-xl">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          onFocus={onFocus} // Call onFocus prop when input gains focus
          onBlur={onBlur}   // Call onBlur prop when input loses focus
          placeholder={placeholder}
          className="p-2 outline-none rounded-xl bg-myGray flex-grow"
        />
      </form>
    </div>
  );
};

export default ResetSearchbar;
