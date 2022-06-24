import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Favorite from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";

import SearchCountries from "./SearchCountries";
import SortComponent from "./SortComponent";
import SwitchThemeButton from "./SwitchThemeButton";
import { ThemeContext, themes } from "../themeComponent/ThemeComponent";
import { AppState } from "../types";

export default function Navigation() {
    const favoriteCountries = useSelector(
        (appState: AppState) => appState.countriesData.favoriteCountries
    );

    const { theme } = React.useContext(ThemeContext);
    //console.log(theme, "Theme");
    const themeColor = themes[theme];
    //console.log(themeColor, "THEME_COLOR");

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
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: themeColor.background,
                    color: themeColor.text,
                }}
            >
                <Toolbar>
                    <SearchCountries />
                    <Badge
                        badgeContent={favoriteCountries.length}
                        color="error"
                    >
                        <Link to="/favorites">
                            <Favorite
                                sx={{
                                    color: "white",
                                }}
                            />
                        </Link>
                    </Badge>
                    <SwitchThemeButton />
                    <SortComponent />
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
