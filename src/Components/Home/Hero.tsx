import { Box, Typography } from "@mui/material";

export default function Hero() {
  // inspo https://www.cosmos.studio/ (hero only)
  return (
    <Box component='section'>
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
            fontFamily: "Anton SC, sans-serif",
            cursor: "default",
            fontSize: "19vw",
            WebkitTextStroke: "4px white",
            color: "transparent",
            transform: "scaleY(1.5)",
            zIndex: -1,
            textShadow: (theme) => `16px 8px ${theme.palette.primary.main}`,
          }}
        >
          Jason Lapina
        </Typography>
        <Box
          component='img'
          src='/assets/hero.png'
          sx={{
            position: "absolute",
            bottom: "0",
            width: "30vw",
          }}
        />
      </Box>
    </Box>
  );
}
