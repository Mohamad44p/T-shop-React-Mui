import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const CourseCard = ({
  image,
  title,
  description,
  price,
  views,
  videos,
  teachers,
}) => (
  <Card sx={{ width: "100%", mb: 4 }}>
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ width: "100%", height: "auto", display: "block" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          m: 2,
          "& > *": {
            bgcolor: "rgba(0, 0, 0, 0.7)",
            color: "common.white",
            borderRadius: 1,
            p: 0.5,
            fontSize: "0.875rem",
            fontWeight: "bold",
          },
        }}
      >
        <Box>{title}</Box>
        <Box>{price}</Box>
      </Box>
    </Box>
    <CardContent sx={{ textAlign: "center" }}>
      <Typography gutterBottom variant="h6" component="div">
        {description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {views} Views · {videos} Videos · {teachers} Teacher
      </Typography>
    </CardContent>
  </Card>
);

const Courses = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} container spacing={2}>
          {[image1, image2, image3, image4].map((image, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CourseCard
                image={image}
                title="Best Course"
                description="HTML & CSS"
                price="$20 USD"
                views="1,500"
                videos="120"
                teachers="2"
              />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2} sx={{ height: "100%", justifyContent: "center" }}>
            <Typography
              variant="subtitle1"
              color="primary.main"
              sx={{ fontWeight: 700, fontSize: "1.1rem" }}
            >
              AVAILABLE FOR YOU
            </Typography>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              Available Courses
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, sem non convallis molestie.
            </Typography>
            <Button variant="contained" sx={{ borderRadius: 2, px: 4 }}>
              See all
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Courses;
