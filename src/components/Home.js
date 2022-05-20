import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import useCountries from "../custom-hooks/useCountries";

const columns = [
    {
        id: "flag",
        label: "Flag",
        minWidth: 170,
        align: "right",
        // format: (value) => <img src={value} alt="flag" />,
    },
    { id: "name", label: "Name", minWidth: 170 },
    { id: "region", label: "Region", minWidth: 100 },
    {
        id: "population",
        label: "Population",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    // {
    //     id: "languages",
    //     label: "Languages",
    //     minWidth: 170,
    //     align: "right",
    //     // format: (value) => value.toFixed(2),
    // },
];

export default function Home() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    const { countriesData, error, loading } = useCountries(
        "https://restcountries.com/v3.1/all"
    );
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        //     <div>
        //         <h1>Hello Countries</h1>
        //         <div>
        //             {countriesData ? (
        //                 countriesData.map((country) => {
        //                     return (
        //                         <div key={country.cca2}>
        //                             <h1>{country.name.common}</h1>
        //                             <p>{country.flag}</p>
        //                             <p>Belongs to this {country.region} region.</p>
        //                             <p>
        //                                 It has population of {country.population}
        //                                 population.
        //                             </p>
        //                             <p>
        //                                 {country.languages &&
        //                                     Object.keys(country.languages).map(
        //                                         (key) => {
        //                                             return (
        //                                                 <p
        //                                                     key={
        //                                                         country.languages[
        //                                                             key
        //                                                         ]
        //                                                     }
        //                                                 >
        //                                                     {country.languages[key]}
        //                                                 </p>
        //                                             );
        //                                         }
        //                                     )}
        //                             </p>
        //                         </div>
        //                     );
        //                 })
        //             ) : (
        //                 <></>
        //             )}
        //         </div>
        //     </div>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {countriesData
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            let result = "";
                                            if (column.id === "name") {
                                                console.log(
                                                    `this is result1 ${countriesData.name.common}`
                                                );
                                                result =
                                                    countriesData.name.common;
                                            } else if (column.id === "flag") {
                                                result = countriesData.flag;
                                            } else {
                                                result = null;
                                            }
                                            console.log(
                                                `this is result ${result}`
                                            );
                                            const value = row[result];
                                            console.log(
                                                `this is value ${value}`
                                            );
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {column.format
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={countriesData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
