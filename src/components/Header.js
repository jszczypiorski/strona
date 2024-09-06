import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Wyszukiwarka przepisów - Znajdź jakiś fajny przepis!
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
