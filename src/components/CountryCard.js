import React from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import BadgeIcon from "@mui/icons-material/Badge";
import LanguageIcon from "@mui/icons-material/Language";
import BorderBottomIcon from "@mui/icons-material/BorderBottom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TranslateIcon from "@mui/icons-material/Translate";

export default function CountryCard({ result }) {
    //console.log(`This is CountryCard result ${result.borders}`);
    const [openCapital, setOpenCapital] = React.useState(false);
    const [openRegion, setOpenRegion] = React.useState(false);
    const [openBorders, setOpenBorders] = React.useState(false);
    const [openCurrency, setOpenCurrency] = React.useState(false);
    const [openLanguages, setOpenLanguages] = React.useState(false);
    const handleClickCapital = () => {
        setOpenCapital(!openCapital);
    };

    const handleClickRegion = () => {
        setOpenRegion(!openRegion);
    };

    const handleClickBorder = () => {
        setOpenBorders(!openBorders);
    };

    const handleClickCurrency = () => {
        setOpenCurrency(!openCurrency);
    };

    const handleClickLanguages = () => {
        setOpenLanguages(!openLanguages);
    };

    return (
        <div>
            {result ? (
                <div key={result.name.common}>
                    <Typography variant="h2" sx={{ margin: "4rem 0" }}>
                        {result.name.common}
                    </Typography>
                    <Card sx={{ minWidth: 345, textAlign: "center" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={result.flags.png}
                            alt={result.name.common + "flag"}
                        />
                        {/* <img src={result.flags.png} alt="flag" /> */}
                        <CardContent sx={{ textAlign: "center" }}>
                            <List
                                sx={{
                                    width: "100%",
                                    maxWidth: 360,
                                    bgcolor: "background.paper",
                                }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                <ListItemButton onClick={handleClickCapital}>
                                    <ListItemIcon>
                                        <BadgeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Capital" />
                                    {openCapital ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openCapital}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText
                                                primary={result.name.common}
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClickRegion}>
                                    <ListItemIcon>
                                        <LanguageIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Region" />
                                    {openRegion ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openRegion}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText
                                                primary={result.region}
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClickBorder}>
                                    <ListItemIcon>
                                        <BorderBottomIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Borders" />
                                    {openBorders ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openBorders}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton
                                            sx={{
                                                pl: 4,
                                                flexDirection: "column",
                                            }}
                                        >
                                            <ListItemText
                                                primary={
                                                    result.borders ? (
                                                        result.borders
                                                    ) : (
                                                        <>NO BORDERS</>
                                                    )
                                                }
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClickCurrency}>
                                    <ListItemIcon>
                                        <CurrencyExchangeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Currencies" />
                                    {openCurrency ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openCurrency}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText
                                                primary={
                                                    result.currencies &&
                                                    Object.keys(
                                                        result.currencies
                                                    ).map((key) => {
                                                        return (
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                                key={
                                                                    result.cca3 +
                                                                    key
                                                                }
                                                            >
                                                                {result
                                                                    .currencies[
                                                                    key
                                                                ].name ? (
                                                                    result
                                                                        .currencies[
                                                                        key
                                                                    ].name
                                                                ) : (
                                                                    <>
                                                                        NO
                                                                        CURRENCY
                                                                    </>
                                                                )}
                                                            </Typography>
                                                        );
                                                    })
                                                }
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                                <ListItemButton onClick={handleClickLanguages}>
                                    <ListItemIcon>
                                        <TranslateIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Languages" />
                                    {openLanguages ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                                <Collapse
                                    in={openLanguages}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemText
                                                primary={
                                                    result.languages &&
                                                    Object.keys(
                                                        result.languages
                                                    ).map((key) => {
                                                        return (
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                                key={
                                                                    result.cca3 +
                                                                    key
                                                                }
                                                            >
                                                                {
                                                                    result
                                                                        .languages[
                                                                        key
                                                                    ]
                                                                }
                                                            </Typography>
                                                        );
                                                    })
                                                }
                                            />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </CardContent>
                    </Card>
                    <Link to="/">
                        <Button variant="contained" sx={{ marginTop: "2rem" }}>
                            Back
                        </Button>
                    </Link>
                </div>
            ) : (
                <Typography>No Results Found!!</Typography>
            )}
        </div>
    );
}
