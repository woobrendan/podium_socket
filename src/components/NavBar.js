import React from "react";
import { Box, Toolbar, AppBar } from "@mui/material";
import SRO from "../images/SRO.jpg";
import "../Styling/navBar.scss";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }} className="nav-bar">
            <AppBar position="static" sx={{ bgcolor: "#FF0000" }}>
                <Toolbar>
                    <div className="navbar-links">
                        <a
                            className="img-container"
                            href="https://www.sro-america.com/"
                        >
                            <img src={SRO} alt="SRO" />
                        </a>
                        {location.pathname !== "/" && (
                            <>
                                <Link to="/">Home</Link>
                                <Link to="/live">Live Race</Link>
                                <Link to="/Results">Results</Link>
                            </>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
