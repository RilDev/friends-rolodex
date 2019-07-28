import React from 'react';
import './search-box.style.css';

const SearchBox = ({placeholder, handleSearch}) => (
	<input
		type="search"
		className={`search-box`}
		placeholder={placeholder}
		onChange={handleSearch}
	/>
);

export default SearchBox;