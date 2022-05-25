import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function CountryCard({ result }) {
    console.log(`This is CountryCard result ${result.borders}`);

    return (
        <Card sx={{ minWidth: 200 }}>
            {result ? (
                <div key={result.name.common}>
                    <CardHeader
                        title={
                            <h1 key={result.name.common}>
                                {result.name.common}
                            </h1>
                        }
                    />
                    <CardMedia sx={{ textAlign: "center" }}>
                        <img src={result.flags.png} alt="flag" />
                    </CardMedia>
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            Capital : {result.capital}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            Region : {result.region}
                        </Typography>
                        Languages :
                        {Object.keys(result.languages).map((key) => {
                            return (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    key={result.cca3 + key}
                                    component="p"
                                >
                                    {result.languages[key]}
                                </Typography>
                            );
                        })}
                        Borders:
                        {Object.keys(result.borders).map((key) => {
                            return (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    key={result.cca3 + key}
                                    component="p"
                                >
                                    {result.borders[key]}
                                </Typography>
                            );
                        })}
                        {Object.keys(result.currencies).map((currency) => {
                            return (
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    key={result.currencies[currency].name}
                                    component="p"
                                >
                                    {result.currencies[currency].name},
                                    {result.currencies[currency].symbol}
                                </Typography>
                            );
                        })}
                    </CardContent>
                </div>
            ) : (
                <p>No results found</p>
            )}
        </Card>
    );
}
