// Autocomplete.js
import React, { useState } from 'react';

const Autocomplete = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search city..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default Autocomplete;
