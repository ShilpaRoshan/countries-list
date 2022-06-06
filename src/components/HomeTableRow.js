import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    addFavoriteCountries,
    removeFavoriteCountries,
} from "../redux/countriesAction";

export default function HomeTableRow({ columns, row }) {
    //const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();
    const favoriteCountries = useSelector(
        (appState) => appState.countriesData.favoriteCountries
    );
    //const isOpen = useSelector((appState) => appState.countriesData.isOpen);
    //console.log(favoriteCountries, "HOMETABLEROW_FAV_COUNTRIES[]_CHECK");

    const handleFavoriteClick = (country) => {
        // if (isOpen) {
        //     console.log(isOpen, "CHECK IS_OPEN_REMOVE");
        //     dispatch(removeFavoriteCountries(country));
        //     return;
        // } else {
        //     console.log(isOpen, "CHECK IS_OPEN_ADD");
        //     dispatch(addFavoriteCountries(country));
        //     return;
        // }
        // isOpen
        //     ? {dispatch(removeFavoriteCountries(country))
        //     console.log("DISPATCH REMOVE")}
        //     : dispatch(addFavoriteCountries(country));
        // dispatch(addFavoriteCountries(country));
        // console.log(isOpen, "HOMETABLEROW");
        const isDuplicate = favoriteCountries.some(
            (value) => value.name.common === country.name.common
        );
        if (isDuplicate) {
            //console.log(isDuplicate, "Duplicate_REMOVE");
            dispatch(removeFavoriteCountries(country));

            return;
        } else {
            console.log(isDuplicate, "Duplicate_ADD");
            dispatch(addFavoriteCountries(country));

            return;
        }
    };
    function handletogglefavorite(country) {
        const isDuplicate = favoriteCountries.some(
            (value) => value.name.common === country.name.common
        );
        console.log(isDuplicate, "Handletogglefavorite");
        return isDuplicate;
    }
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column) => {
                let result = "";
                if (column.id === "name") {
                    result = row.name.common;
                    //console.log(result, "HOMETABLEROW");
                } else if (column.id === "flags") {
                    result = row.flags.png;
                } else if (column.id === "region") {
                    result = row.region;
                } else if (column.id === "population") {
                    result = row.population;
                } else if (column.id === "languages") {
                    result = row.languages;
                } else {
                    result = null;
                }
                const value = result;

                return value ? (
                    <TableCell key={column.id} align={column.align}>
                        {column.format ? (
                            column.format(value)
                        ) : column.id === "languages" ? (
                            Object.keys(value).map((item) => {
                                return <p key={item}>{value[item]}</p>;
                            })
                        ) : column.id === "name" ? (
                            <Link to={`/country/${value}`}>
                                <p>{value}</p>
                            </Link>
                        ) : (
                            <p>{value}</p>
                        )}
                    </TableCell>
                ) : null;
            })}
            <TableCell>
                <FavoriteIcon
                    sx={() =>
                        handletogglefavorite(row)
                            ? { color: "red" }
                            : { color: "" }
                    }
                    onClick={() => handleFavoriteClick(row)}
                />
            </TableCell>
        </TableRow>
    );
}
