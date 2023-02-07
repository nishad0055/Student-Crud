import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/LogoutOutlined";
import UserIcon from "@mui/icons-material/PeopleAltOutlined";
import DataIcon from "@mui/icons-material/FormatListBulletedOutlined";
import Acc from "@mui/icons-material/AccountBox";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/UserContext";

const drawerWidth = 240;

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { user, logOut } = React.useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          style={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Resolute AI Software
            </Typography>
            <Acc />
            <Button color="inherit">
              {" "}
              {user?.email ? user?.email : "No email found"}{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar></Toolbar>
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/add-student");
              }}
            >
              <ListItemButton
                sx={{
                  ":hover": {
                    bgcolor: "#F33823", // theme.palette.primary.main
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
              >
                <ListItemIcon>
                  <UserIcon />
                </ListItemIcon>
                <ListItemText primary="Add Student" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/student-data");
              }}
            >
              <ListItemButton
                sx={{
                  ":hover": {
                    bgcolor: "#F33823", // theme.palette.primary.main
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
              >
                <ListItemIcon>
                  <DataIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Students" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {}}
            >
              <ListItemButton
                onClick={handleSignOut}
                sx={{
                  ":hover": {
                    bgcolor: "#F33823", // theme.palette.primary.main
                    color: "white",
                    borderRadius: "5px",
                  },
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="SignOut" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
