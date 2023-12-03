import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LogoNavbar from "../assets/Logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const buttons = ["Home", "Course", "About Us", "Article", "Contact"];

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              mb: { xs: 2, sm: 0 },
            }}
          >
            <img src={LogoNavbar} alt="LogoNavbar" height="30" />
            <Typography
              color={"blue"}
              fontWeight="400"
              variant="h9"
              noWrap
              component="div"
              sx={{ ml: 2, display: { xs: "none", md: "block" } }}
            >
              mangcoding Store
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: { sm: 1 },
              display: { xs: "flex", sm: "none" },
              justifyContent: "flex-end",
            }}
          >
            <Button variant="outlined" sx={{ mx: 1 }}>
              Login
            </Button>
            <Button variant="contained">Register</Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: { xs: 0, sm: 10, md: 20, lg: 30, xl: 40 },
            }}
          >
            {buttons.map((button) => (
              <Button
                key={button}
                sx={{
                  color: theme.palette.common.black,
                  textTransform: "none",
                  mr: 2,
                }}
              >
                {button}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              flexGrow: 0,
            }}
          >
            <Button variant="outlined" sx={{ mr: 1 }}>
              Login
            </Button>
            <Button variant="contained">Register</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
