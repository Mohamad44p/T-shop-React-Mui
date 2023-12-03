import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const FeatureCard = ({ title, description, Icon }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#545BE8",
      color: "white",
      borderRadius: 2,
      minWidth: 200,
      maxWidth: 256,
    }}
  >
    <IconButton sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", margin: 1 }}>
      <Icon sx={{ color: "white" }} />
    </IconButton>
    <Typography variant="h6" component="h3" gutterBottom>
      {title}
    </Typography>
    <Typography>{description}</Typography>
  </Paper>
);

const CardSection = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#FFF", mt: 13, padding: 13 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} md={4}>
            <Typography variant="overline" color="secondary">
              WHAT WE GIVE
            </Typography>
            <Typography variant="h4" color="primary.main" gutterBottom>
              What do You Get From Us
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              dignissim, sem non convallis molestie.
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={8}
            spacing={2}
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Professional Teacher"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
                Icon={AccountCircleIcon}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Course Certificate"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
                Icon={VerifiedIcon}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureCard
                title="Interesting Learning"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie."
                Icon={EmojiObjectsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CardSection;
