import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: "72px",
        position: "fixed",
        display: "flex",
        width: "100%",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mx: "auto",
          position: "relative",
        }}
      >
        {NAV_ITEMS.map(({ text }) => (
          <Navitem text={text} key={text} />
        ))}

        {/* START: FOR AESTHETICS ONLY */}
        <Bars
          sx={{
            width: "50vw",
            left: "-52vw",
          }}
        />
        <Bars
          sx={{
            width: "50vw",
            right: "-52vw",
          }}
        />
        <Bars
          sx={{
            width: "100%",
            bottom: "8px",
          }}
        />

        {/* END: FOR AESTHETICS ONLY */}
      </Stack>
    </Box>
  );
}

const Navitem = ({ text }: NavItemProps) => {
  return (
    <Box
      component={Link}
      to='/'
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Typography variant='h6'>{text}</Typography>
    </Box>
  );
};

const Bars = ({ sx }: BoxProps) => {
  return <Box height='2px' bgcolor='gray' position='absolute' sx={sx} />;
};

interface NavItemProps {
  text: string;
  // link: string;
}

const NAV_ITEMS = [
  {
    text: "Home",
    link: "link",
  },
  {
    text: "About",
    link: "link",
  },
  {
    text: "Experience",
    link: "link",
  },
  {
    text: "Projects",
    link: "link",
  },
  {
    text: "Something",
    link: "link",
  },
  {
    text: "Memes",
    link: "link",
  },
];
