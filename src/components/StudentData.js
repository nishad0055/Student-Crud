import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Toolbar from "@mui/material/Toolbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function StudentData() {
  return (
    <div>
      <Box component="main" sx={{ display: "flex", p: 1, marginTop: "60px" }}>
        <DashboardLayout />
        <Toolbar>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 1080 }} aria-label="customized table">
              <TableHead style={{ backgroundColor: "red" }}>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Class</StyledTableCell>
                  <StyledTableCell align="right">Roll No.</StyledTableCell>
                  <StyledTableCell align="right">
                    View / edit / delete
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell>Bruce Banner</StyledTableCell>
                  <StyledTableCell align="right">VI-A</StyledTableCell>
                  <StyledTableCell align="right">12</StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton aria-label="delete" size="small">
                      <EyeIcon fontSize="small" color="warning" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <EditIcon fontSize="small" color="warning" />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <DeleteIcon fontSize="small" color="warning" />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Toolbar>
      </Box>
    </div>
  );
}
