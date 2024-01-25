import React, { useState } from 'react';

const SearchBar = ({ id, placeholder, onFormSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(inputText, id);
    if (id === 'tags') {
      setInputText(''); // Clear inputText after form submission
    }
  };

  const minInputWidth = 48;
  const inputStyle = {
    width: `${Math.max(inputText.length * 8, minInputWidth)}px`,
    border: 'none',
    outline: 'none',
    color: '#EDEDE9',
    backgroundColor: 'transparent',
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border-none w-fit">
        <input
          type="text"
          placeholder={placeholder}
          value={inputText}
          onChange={handleChange}
          style={inputStyle}
          className="border-none focus:outline-none border-2 rounded-lg"
        />
      </form>
    </div>
  );
};

export default SearchBar;
