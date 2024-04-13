// Autocomplete.jsx
import React, { useState } from 'react';

const Autocomplete = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a city..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default Autocomplete;
