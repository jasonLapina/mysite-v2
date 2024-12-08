import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
