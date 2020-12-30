import React from 'react';
import './search-box.styles.css';

export const Search = ({placeholer, handleChange}) => (
    <input className="search"
      type="search" 
      placeholder={placeholer} 
      onChange={handleChange} />
)