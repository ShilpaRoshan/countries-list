import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countriesAction";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import HomeTableBody from "./HomeTableBody";
import HomeTableHead from "./HomeTableHead";

const columns = [
    {
        id: "flags",
        label: "Flag",
        minWidth: 100,
        align: "center",

        format: (value) => <img src={value} alt="flag" />,
    },
    { id: "name", label: "Name", minWidth: 170, align: "center" },

    { id: "region", label: "Region", minWidth: 100 },
    {
        id: "languages",
        label: "Languages",
        minWidth: 170,
        align: "right",
    },
    {
        id: "population",
        label: "Population",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },
];

export default function Home() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const dispatch = useDispatch();
    const countriesData = useSelector((state) =>
        state.countriesData.keyword
            ? state.countriesData.filteredCountriesData
            : state.countriesData.countriesData
    );
    console.log(countriesData, "HOME_COMPONENT");
    const loading = useSelector((state) => state.countriesData.loading);
    const error = useSelector((state) => state.countriesData.error);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <Paper sx={{ width: "100%" }}>
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
