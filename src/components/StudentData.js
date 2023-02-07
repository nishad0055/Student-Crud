import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Toolbar from "@mui/material/Toolbar";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import ShowDialog from "./ShowDialog";

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
  const datas = useLoaderData();
  const [displayUsers, setDiplayUsers] = useState(datas);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (user) => {
    const agree = window.confirm(`“Are you sure you want to delete
this item `);

    if (agree) {
      fetch(`http://localhost:5000/add/${user}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Student Deleted Sucessfull");
            const remaining = displayUsers.filter((std) => std._id !== user);
            setDiplayUsers(remaining);
          }
        });
    }
  };
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
                {displayUsers.map((user) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell>
                      {" "}
                      {user.firstName} {user.lastName}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {user.class}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {" "}
                      {user.roll}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton
                        onClick={() => {
                          handleClickOpen();
                          setView(user);
                        }}
                        aria-label="edit"
                        size="small"
                      >
                        <EyeIcon fontSize="small" color="warning" />
                      </IconButton>
                      <IconButton aria-label="delete" size="small">
                        <EditIcon fontSize="small" color="warning" />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(user._id)}
                        size="small"
                      >
                        <DeleteIcon fontSize="small" color="warning" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Toolbar>
      </Box>
      {view && (
        <ShowDialog
          open={open}
          handleClose={handleClose}
          view={view}
        ></ShowDialog>
      )}
    </div>
  );
}
