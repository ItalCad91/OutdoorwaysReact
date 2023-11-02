import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Button = styled.button`
margin-left: 20px;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ClearButton = styled.button`
  background-color: #ff0000; /* Change the background color as needed */
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
`;

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  const handleClear = () => {
    setSearchInput("");
    onSearch("");
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for products"
        value={searchInput}
        onChange={handleChange}
      />
      <Button onClick={handleSearch}>Search</Button>
      <ClearButton onClick={handleClear}>Clear</ClearButton>
    </SearchContainer>
  );
};

export default SearchBar;
