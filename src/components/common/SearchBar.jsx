import React, { useState } from 'react';

const SearchBar = ({ placeholder, onFormSubmit }) => {
  const [inputText, setInputText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(searchTerm);
  };

  const minInputWidth = 37;
  const inputStyle = {
    width: `${Math.max(inputText.length * 10, minInputWidth)}px`,
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border-none w-fit">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
          className="border-none focus:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchBar;
