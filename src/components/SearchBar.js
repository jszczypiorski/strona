import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const SearchBar = ({ setRecipes }) => {
  const [query, setQuery] = useState();
  console.log(query);
  async function handleClick() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=505c4b4c&app_key=4ec7e993d071b74980adc7585c050cbb`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  }
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <SearchContainer>
      <TextField
        label="Wyszukaj przepisy..."
        variant="outlined"
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
    </SearchContainer>
  );
};
export default SearchBar;
