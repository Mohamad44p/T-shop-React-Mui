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
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#393E46", color: "white" }}>
      <Container maxWidth="lg" sx={{ py: 5, mt: 10, padding: 15 }}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <Typography variant="h6">Company</Typography>
            </Box>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Press</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <Typography variant="h6">Services</Typography>
            </Box>
            <Typography variant="body2">Web Development</Typography>
            <Typography variant="body2">Mobile App Development</Typography>
            <Typography variant="body2">UI/UX Design</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <Typography variant="h6">Contact</Typography>
            </Box>
            <Typography variant="body2">Email: contact@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <Typography variant="h6">Social Media</Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              <Avatar>
                <FacebookIcon />
              </Avatar>
              <Avatar>
                <TwitterIcon />
              </Avatar>
              <Avatar>
                <LinkedInIcon />
              </Avatar>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © 2023 Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
