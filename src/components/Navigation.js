import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Favorite from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";

import SearchCountries from "./SearchCountries";
//import SortComponent from "./SortComponent";
import Test from "./Test";

export default function Navigation() {
    const favoriteCountries = useSelector(
        (appState) => appState.countriesData.favoriteCountries
    );

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = "primary-search-account-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        ></Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        ></Menu>
    );

    return (
        <Box sx={{ flexGrow: 1, maxHeight: "300vh" }}>
            <AppBar position="static">
                <Toolbar>
                    <SearchCountries />
                    <Badge
                        badgeContent={favoriteCountries.length}
                        color="error"
                    >
                        <Link to="/favorites">
                            <Favorite sx={{ color: "white" }} />
                        </Link>
                    </Badge>
                    {/* <SortComponent /> */}
                    <Test />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
