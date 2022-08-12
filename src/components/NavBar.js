import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoutButton from "./LogoutButton";

export const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "yellow" }}>
      <AppBar sx={{ backgroundColor: "lightgray" }} position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="black" variant="h5" component="div">
            Universal Footwear
          </Typography>
          {isAuthenticated && (
            <Typography color="black" variant="body1" component="div">
              {user.name} <LogoutButton>Logout</LogoutButton>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
