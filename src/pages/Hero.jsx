import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Heroimage from "../assets/Heroimage.png";

const Hero = () => {
  return (
    <Box
      sx={{
        padding: 13,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
        overflow: "hidden",
        mt: 10,
      }}
    >
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ maxWidth: "600px" }}>
          <Typography
            component="h1"
            variant="h2"
            align="left"
            color="text.primary"
            gutterBottom
          >
            Let's Find The Right Course For you
          </Typography>
          <Typography
            variant="h5"
            align="left"
            color="text.secondary"
            paragraph
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button variant="contained" size="large">
              Register
            </Button>
            <Button variant="outlined" size="large">
              <PlayCircleOutlineIcon sx={{ mr: 1 }} />
              Play Video
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "600px",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Heroimage}
            alt="Hero"
            style={{ width: "100%", height: "400px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
