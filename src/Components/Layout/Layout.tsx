import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <Box
      sx={{
        mx: 1,
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Box component='main'>
        <Outlet />

        <Box
          component='video'
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -99,
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
        >
          <source src='/assets/bg.mp4' />
        </Box>
      </Box>
    </Box>
  );
}
