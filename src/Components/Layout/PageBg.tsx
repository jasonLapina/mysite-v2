import { Box } from "@mui/material";

export default function PageBg() {
  return (
    <Box
      component='video'
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -99,
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
      autoPlay
      loop
      muted
    >
      <source src='/assets/bg.mp4' />
    </Box>
  );
}
