import React from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SearchBar({ nbCarMin, onChange}) {

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onChange(searchValue.trim());
};
const handleChange = (event) => {
  setSearchValue(event.target.value);
};
  return (
    <form onSubmit={handleSubmit} className="rounded-full md:w-2/3 w-full bg-indigo-50 text-lg border border-gray-400 py-1 px-6  grid grid-cols-[1fr_auto]">
      <input onChange={handleChange} className="border-0 bg-transparent focus:outline-0 w-full" type="search" placeholder="Search" name="search" aria-label="Search" minLength={nbCarMin} />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}
SearchBar.propTypes = {
  nbCarMin: PropTypes.number,

}
export default SearchBar;