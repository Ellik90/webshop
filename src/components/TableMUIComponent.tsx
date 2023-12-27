import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

interface TableMUIProps {
  titleRow: string[];
  // Här har jag any då jag vill kunna ha vilken typ som helst? en card komponent, en bild, text osv?
  cellRows: any[];
}

const TableMUI: React.FC<TableMUIProps> = ({ titleRow, cellRows }) => {
  return (
    <TableContainer component={Paper} elevation={2}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {titleRow.map((title) => (
              <TableCell
                sx={{
                  backgroundColor: "#c9c7c7",
                  padding: 1.5,
                }}
                key={title}
              >
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cellRows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map(
                (cell: { property: ""; datacyCell: "" }, cellIndex: number) => (
                  <TableCell
                    key={cellIndex}
                    sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
                  >
                    {cell.property}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMUI;
