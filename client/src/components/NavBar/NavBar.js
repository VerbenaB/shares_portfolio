import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Typography, useMediaQuery, Menu, MenuItem, Button} from "@material-ui/core";


const NavBar = () => {
    
    // const [anchor, setAnchor] = React.useState(null);
    // const open = Boolean(anchor);

    // const handleMenu = (event) => {
    //     setAnchor(event.currentTarget);
    //  };

    // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    
    return (
       
        <AppBar position="static" color="inherit">
            <Toolbar variant="dense">
                <Typography variant="h6">Shares Portfolio</Typography>
                <Link to="/" style={{ textDecoration: 'none' }}><MenuItem>Home</MenuItem></Link>
                <Link to="/portfolio" style={{ textDecoration: 'none' }}><MenuItem>Portfolio</MenuItem></Link>
            </Toolbar>
        </AppBar>

    )
}

export default NavBar;