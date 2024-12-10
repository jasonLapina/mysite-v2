import { Box, Container } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import PageBg from "./PageBg";
import Hero from "../Home/Hero";
import ScreenFrame from "./ScreenFrame";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ScreenFrame />
      <PageBg />
      <Navbar />
      <Box component='main'>
        {pathname === "/" && <Hero />}
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
}
