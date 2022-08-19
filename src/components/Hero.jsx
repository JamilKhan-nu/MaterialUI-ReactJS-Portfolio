import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        pt: "3rem",
        width: "70%",
        height: "55vh",
        bgcolor: "#f3e5f5",
        pl: "2rem",
        color: "white",
        backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=1000")`,
      }}
    >
      <Typography variant="h5" sx={{ pb: "1rem" }}>
        Hello World
      </Typography>
      <Typography variant="h2" sx={{ pb: "1rem" }}>
        I am Jamil Khan
      </Typography>
      <Typography variant="h6">
        I create an efficient UI mobile or web design also UX research to make
        sure that I get what people needs and strategy for interaction design.
      </Typography>
      <Stack spacing={2} direction="row" sx={{ pt: "2rem" }}>
        <Button variant="contained">Download CV</Button>
        <Button variant="outlined" sx={{ color: "white" }}>
          Let's Talk
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
