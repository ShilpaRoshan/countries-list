import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeContext, themes } from "../themeComponent/ThemeComponent";

import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
    addFavoriteCountries,
    removeFavoriteCountries,
} from "../redux/countriesAction";

export default function HomeTableRow({ columns, row }) {
    const { theme } = React.useContext(ThemeContext);
    const themeColor = themes[theme];
    const dispatch = useDispatch();
    const favoriteCountries = useSelector(
        (appState) => appState.countriesData.favoriteCountries
    );
    const handleFavoriteClick = (country) => {
        const isDuplicate = favoriteCountries.some(
            (value) => value.name.common === country.name.common
        );
        if (isDuplicate) {
            dispatch(removeFavoriteCountries(country));
            return;
        } else {
            //console.log(isDuplicate, "Duplicate_ADD");
            dispatch(addFavoriteCountries(country));

            return;
        }
    };
    function handletogglefavorite(country) {
        const isDuplicate = favoriteCountries.some(
            (value) => value.name.common === country.name.common
        );
        return isDuplicate;
    }
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column) => {
                let result = "";
                switch (column.id) {
                    case "name":
                        result = row.name.common;
                        break;
                    case "flags":
                        result = row.flags.png;
                        break;
                    case "region":
                        result = row[column.id] || "No Data";
                        break;
                    case "population":
                        result = row[column.id] || "No Data";
                        break;
                    case "languages":
                        result = row.languages || "No Data";
                        break;
                    case "favourite":
                        result = (
                            <FavoriteIcon
                                sx={() =>
                                    handletogglefavorite(row)
                                        ? { color: "red" }
                                        : { color: "" }
                                }
                                onClick={() => handleFavoriteClick(row)}
                            />
                        );

                        break;
                    default:
                        result = null;
                }
                const value = result;

                return value ? (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        sx={{
                            backgroundColor: themeColor.tablebody,
                            color: themeColor.textbody,
                        }}
                    >
                        {column.format ? (
                            column.format(value)
                        ) : column.id === "languages" ? (
                            Object.keys(value).map((item) => {
                                return <p key={item}>{value[item]}</p>;
                            })
                        ) : column.id === "name" ? (
                            <Link
                                style={{ textDecoration: "none" }}
                                to={`/country/${value}`}
                            >
                                <p>{value}</p>
                            </Link>
                        ) : (
                            <p>{value}</p>
                        )}
                    </TableCell>
                ) : null;
            })}
        </TableRow>
    );
}
//  <FavoriteIcon
//      sx={() => (handletogglefavorite(row) ? { color: "red" } : { color: "" })}
//      onClick={() => handleFavoriteClick(row)}
//  />;
