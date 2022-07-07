import React from "react";
import TableBody from "@mui/material/TableBody";
import HomeTableRow from "./HomeTableRow";
import { Country, Column } from "../types";

type HomeTableBodyProps = {
  countriesData: Country[];
  page: number;
  rowsPerPage: number;
  columns: Column[];
};

export default function HomeTableBody({
  countriesData,
  page,
  rowsPerPage,
  columns,
}: HomeTableBodyProps) {
  return (
    <>
      <TableBody>
        {countriesData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <HomeTableRow row={row} columns={columns} key={row.name.common} />
            );
          })}
      </TableBody>
    </>
  );
}
