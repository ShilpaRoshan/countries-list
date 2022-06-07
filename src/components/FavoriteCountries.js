import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

function FavoriteCountries() {
    const favoriteCountriesList = useSelector(
        (appState) => appState.countriesData.favoriteCountries
    );
    //console.log(favoriteCountriesList, "FROM FAV_PAGE");
    return (
        <React.Fragment>
            <Link to="/">Back</Link>
            {favoriteCountriesList.map((country) => {
                return (
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "1rem auto",
                            maxwidth: "70vw",
                        }}
                    >
                        <CardHeader
                            title={
                                <h1 key={country.name.common}>
                                    {country.name.common}
                                </h1>
                            }
                        />
                        <CardMedia sx={{ textAlign: "center" }}>
                            <img src={country.flags.png} alt="flag" />
                        </CardMedia>
                    </Card>
                );
            })}
        </React.Fragment>
    );
}

export default FavoriteCountries;
