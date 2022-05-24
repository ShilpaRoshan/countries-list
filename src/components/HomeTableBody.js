import React from "react";
import TableBody from "@mui/material/TableBody";
import HomeTableRow from "./HomeTableRow";

export default function HomeTableBody({
    countriesData,
    page,
    rowsPerPage,
    columns,
}) {
    return (
        <>
            <TableBody>
                {countriesData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return <HomeTableRow row={row} columns={columns} />;
                    })}
            </TableBody>
        </>
    );
}
