import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import PageBg from "./PageBg";

export default function Layout() {
  return (
    <>
      <PageBg />
      <Navbar />
      <Box component='main'>
        <Outlet />
      </Box>
    </>
  );
}
