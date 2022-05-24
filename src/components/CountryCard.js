import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

export default function CountryCard({ result }) {
    console.log(result);

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
                    <CardMedia
                        component="img"
                        height="300"
                        width="400"
                        image={result.flags.png}
                        alt="flag"
                    />
                    <CardContent>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            Capital : {result.capital}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            Region : {result.region}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            {Object.keys(result.languages).map((key) => {
                                return (
                                    <p key={result.languages[key]}>
                                        Languages : {result.languages[key]}
                                    </p>
                                );
                            })}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            {result.borders.map((item) => {
                                return <p> Borders : {item}</p>;
                            })}
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} component="p">
                            {Object.keys(result.currencies).map((currency) => {
                                return (
                                    <p>
                                        {result.currencies[currency].name},
                                        {result.currencies[currency].symbol}
                                    </p>
                                );
                            })}
                        </Typography>
                    </CardContent>
                </div>
            ) : (
                <p>No results found</p>
            )}
        </Card>
    );
}
