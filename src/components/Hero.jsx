import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pt: "3rem",
          width: "80%",
          height: "55vh",
          bgcolor: "#f3e5f5",
          p: "2rem",
          color: "white",
          backgroundImage: `linear-gradient( rgba(8, 8, 37, 0.85), rgba(0, 15, 80, 0.675)), url("https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=1000")`,
        }}
      >
        <Typography variant="h5" sx={{ pt: 6, pb: "1rem" }}>
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
      <Box
        sx={{
          borderColor: "secondary.main",
          height: 233,
          width: 190,
          mt: -10,
          border: 5,
          ml: 70,
        }}
      >
        <Box
          component="img"
          sx={{
            m: -2,
            height: 233,
            width: 190,
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Box>
    </Box>
  );
};

export default Hero;
