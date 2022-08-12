import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LoginButton } from "../components/LoginButton";

function Public() {
  return (
    <Box sx={{ textAlign: "center", mt: "4rem" }}>
      <Typography variant="h1">Universal Footwear</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 300,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2" sx={{ mb: "2rem" }}>
          Hey there! Login to your brand's portal to see analytics about your
          products
        </Typography>
        <LoginButton />
      </Box>
    </Box>
  );
}

export default Public;
