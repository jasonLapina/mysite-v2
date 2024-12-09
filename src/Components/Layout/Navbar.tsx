import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: "72px",
        position: "fixed",
        display: "flex",
        width: "100%",
        top: 0,
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
