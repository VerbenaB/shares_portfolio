import React from "react";
import { Link } from "react-router-dom";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import { AppBar, Toolbar, Typography, MenuItem } from "@material-ui/core";

import "./NavBar.css";

const NavBar = () => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <Typography variant="h6" className="brand">
          Simplishares <ShowChartRoundedIcon fontSize="small" />
        </Typography>
        <Link to="/" className="link" style={{ textDecoration: "none" }}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          to="/portfolio"
          className="link"
          style={{ textDecoration: "none" }}
        >
          <MenuItem>Portfolio</MenuItem>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
