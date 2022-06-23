import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="        검색" />
      <button className="material-icons">search</button>
    </div>
  );
}
