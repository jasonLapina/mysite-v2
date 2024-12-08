import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Layout() {
  // inspo https://www.cosmos.studio/
  return (
    <>
      <Navbar />
      <Box component='main'>
        <Outlet />
      </Box>
    </>
  );
}
