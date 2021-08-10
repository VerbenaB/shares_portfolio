import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li className="link">
            <Link to="/">Home</Link>
            </li>
            <li className="link">
            <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    )
}

export default NavBar;