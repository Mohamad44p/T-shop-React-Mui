import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar1 from "@mui/icons-material/AccountCircle";

const testimonials = [
  {
    name: "Friskidia",
    role: "Client",
    avatar: Avatar1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus.",
  },
  {
    name: "Finkidia",
    role: "Client",
    avatar: Avatar1,
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus.",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 4, mx: 2, position: "relative", overflow: "visible" }}
    >
      <Avatar
        src={testimonial.avatar}
        alt={testimonial.name}
        sx={{
          width: 56,
          height: 56,
          position: "absolute",
          top: -28,
          left: "calc(50% - 28px)",
          border: "2px solid white",
        }}
      />
      <Stack spacing={1} alignItems="center" sx={{ pt: 4 }}>
        <Typography variant="h6" component="p">
          {testimonial.name}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {testimonial.role}
        </Typography>
        <Rating value={testimonial.rating} readOnly />
        <Typography variant="body2" textAlign="center">
          “{testimonial.text}”
        </Typography>
      </Stack>
    </Paper>
  );
};

const Testimonials = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" textAlign="center" gutterBottom sx={{ mb: 15 }}>
        Testimonials
      </Typography>
      <Grid container justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
