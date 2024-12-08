import { Box, Typography } from "@mui/material";

export default function Hero() {
  // inspo https://www.cosmos.studio/ (hero only)
  return (
    <Box
      component='section'
      sx={{
        height: "100vh",
        width: "100vw",
        pt: 10,
      }}
    >
      <Box
        sx={{
          height: "90vh",
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: "center",
            fontSize: "20rem",
            fontFamily: "fantasy, sans-serif",
          }}
        >
          Jason Lapina
        </Typography>
      </Box>
    </Box>
  );
}
