import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Wyszukiwarka przepisów - Znajdź jakiś fajny przepis!
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
