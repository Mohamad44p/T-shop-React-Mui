import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rusalitimage from "../assets/Rusalitimage.png";

const Statistics = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #545BE8 0%, #272DB0 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box
          component="img"
          src={Rusalitimage}
          alt="Students"
          sx={{
            height: "auto",
            maxWidth: { xs: "100%", md: "50%" },
            maxHeight: "100%",
            width: "550px",
          }}
        />
        <Box sx={{ flexGrow: 1, color: "#FFF" }}>
          <Typography variant="overline" display="block">
            SELECTED COURSE
          </Typography>
          <Typography variant="h3" gutterBottom>
            People Taking Courses
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dignissim, sem non convallis molestie.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: 360,
              mt: 3,
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" component="span">
                6,000
              </Typography>
              <Typography variant="subtitle2" component="span">
                People Views
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" component="span">
                4,000
              </Typography>
              <Typography variant="subtitle2" component="span">
                User
              </Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" component="span">
                100
              </Typography>
              <Typography variant="subtitle2" component="span">
                Course
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics;
