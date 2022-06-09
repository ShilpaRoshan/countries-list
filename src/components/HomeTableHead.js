import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

import { ThemeContext, themes } from "../themeComponent/ThemeComponent";

export default function HomeTableHead({ columns }) {
    const { theme } = React.useContext(ThemeContext);
    const themeColor = themes[theme];
    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        sx={{
                            backgroundColor: themeColor.tablehead,
                            color: themeColor.text,
                            fontSize: "1.5em",
                            fontWeight: "bold",
                        }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
