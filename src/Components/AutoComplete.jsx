// Import's
import React, { useState } from 'react';

// AutoComplete functional component which autocomplet's search query
const Autocomplete = ({ onSearch }) => {
  // State's
  const [inputValue, setInputValue] = useState('');

  // Input change handler
  const handleChange = (e) => {
    setInputValue(e.target.value);
    onSearch(e.target.value);
  };

  // Returning JSX
  return (
    // Search container
    <div className="mt-4">
      {/* Search input */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder="Search for a city..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

// Exporting AutoComplete
export default Autocomplete;
