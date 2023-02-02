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
import InboxIcon from "@mui/icons-material/MoveToInbox";

import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function DashboardLayout() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
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
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => {
                navigate("/student-data");
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Manage Student" />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
