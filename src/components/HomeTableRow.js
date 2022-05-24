import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function HomeTableRow({ columns, row }) {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column) => {
                let result = "";
                if (column.id === "name") {
                    result = row.name.common;
                } else if (column.id === "flags") {
                    result = row.flag;
                } else if (column.id === "region") {
                    result = row.region;
                } else if (column.id === "population") {
                    result = row.population;
                    console.log(`Population:${row.population}`);
                } else if (column.id === "languages") {
                    result = row.languages;
                } else {
                    result = null;
                }
                const value = result;
                console.log(`this is value ${value}`);
                return (
                    <TableCell key={column.id} align={column.align}>
                        {column.id === "languages" ? (
                            Object.keys(value).map((item) => {
                                return <p>{value[item]}</p>;
                            })
                        ) : (
                            <p>{value}</p>
                        )}
                    </TableCell>
                    // {value ? (
                    //         <TableCell
                    //             key={column.id}
                    //             align={column.align}
                    //         >
                    //             {column.format
                    //                 ? column.format(
                    //                       value
                    //                   )
                    //                 : value}
                    //         </TableCell>
                    //     ) : (
                    //         <span>-</span>
                    //     )}
                );
            })}
        </TableRow>
    );
}
