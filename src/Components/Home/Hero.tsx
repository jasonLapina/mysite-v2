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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 20,
        }}
      >
        <Typography
          variant='h1'
          sx={{
            textAlign: "center",
            fontFamily: "fantasy, sans-serif",
            transform: "scaleY(1.5)",
            fontSize: "18vw",
            lineHeight: "14vw",
            cursor: "default",
          }}
        >
          Jason Lapina
        </Typography>
        <Box
          component='img'
          src='/assets/hero.png'
          sx={{
            transform: "translateY(-25%) scale(1.2)",
          }}
        />
      </Box>
    </Box>
  );
}
