import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, useMediaQuery, Menu, MenuItem, Button} from "@material-ui/core";
import "./NavBar.css";


const NavBar = () => {
    
    // const [anchor, setAnchor] = React.useState(null);
    // const open = Boolean(anchor);

    // const handleMenu = (event) => {
    //     setAnchor(event.currentTarget);
    //  };

    // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    
    return (
       
        <AppBar position="static" color="secondary">
            <Toolbar variant="dense">
                <Typography variant="h6">Shares Portfolio</Typography>
                <Link to="/" className="link" style={{ textDecoration: 'none' }}><MenuItem>Home</MenuItem></Link>
                <Link to="/portfolio" className="link" style={{ textDecoration: 'none' }}><MenuItem>Portfolio</MenuItem></Link>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;