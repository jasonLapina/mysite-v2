import { Box, Container } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import PageBg from "./PageBg";
import Hero from "../Home/Hero";

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
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
