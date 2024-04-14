import React, { useState } from 'react';

// AutoComplete functional component which autocompletes search query
const Autocomplete = ({ onSearch }) => {
  // State for input value
  const [inputValue, setInputValue] = useState('');

  // Input change handler
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update input value state
    onSearch(value); // Call onSearch function with the updated value
  };

  // Returning JSX
  return (
    // Search container
    <div className="mt-4">
      {/* Search input */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange} // Attach handleChange function to onChange event
        placeholder="Search for a city..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

// Exporting AutoComplete
export default Autocomplete;
