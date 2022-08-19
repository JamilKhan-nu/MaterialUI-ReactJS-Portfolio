import { Box } from "@mui/material";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          height: "100vh",
          pl: "15rem",
          pt: "3rem",
        }}
      >
        <Navbar />
        <Hero />
      </Box>
    </>
  );
}

export default App;
