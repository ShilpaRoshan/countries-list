import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countriesAction";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import HomeTableBody from "./HomeTableBody";
import HomeTableHead from "./HomeTableHead";
import { AppState, Column } from "../types";

const columns: Column[] = [
    {
        id: "flags",
        label: "Flag",
        minWidth: 100,
        align: "center",
        format: (value) => (
            <img
                src={value as string}
                alt="flag"
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
        ),
    },
    {
        id: "name",
        label: "Name",
        minWidth: 170,
        align: "center",
    },

    { id: "region", label: "Region", minWidth: 100 },
    {
        id: "languages",
        label: "Languages",
        minWidth: 170,
        align: "center",
    },
    {
        id: "population",
        label: "Population",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "favourite",
        label: "Favorite",
        minWidth: 170,
        align: "center",
    },
];

export default function Home() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const dispatch = useDispatch<any>();
    const countriesData = useSelector((appState: AppState) =>
        appState.countriesData.keyword
            ? appState.countriesData.filteredCountriesData
            : appState.countriesData.countriesData
    );
    const loading = useSelector(
        (appState: AppState) => appState.countriesData.loading
    );
    const error = useSelector(
        (appState: AppState) => appState.countriesData.error
    );

    const handleChangePage = (event: any, newPage: number) => {
        console.log(event, newPage, "Home");
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const result = +event.target.value;
        setRowsPerPage(result);
        setPage(0);
    };

    React.useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <HomeTableHead columns={columns} />
                    <HomeTableBody
                        countriesData={countriesData}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        columns={columns}
                    />
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
