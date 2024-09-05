import React, { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("chicken");

  async function handleClick() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=chicken&type=public&app_id=505c4b4c&app_key=4ec7e993d071b74980adc7585c050cbb`,
    );
    const data = await response.json();
    console.log(data);
    onSearch(data.hits);
  }
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <SearchContainer>
      <TextField
        label="Wyszukaj przepisy..."
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleClick()}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Search
      </Button>
    </SearchContainer>
  );
};
export default SearchBar;
