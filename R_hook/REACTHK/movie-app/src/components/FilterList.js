// src/components/Filter.js
import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ margin: '20px' }}>
      <input 
        type="text" 
        placeholder="Search by title" 
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input 
        type="number" 
        placeholder="Search by rating" 
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
