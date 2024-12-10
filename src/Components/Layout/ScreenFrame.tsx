import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

export default function ScreenFrame() {
  return (
    <>
      <Cross position='top-left' />
      <Cross position='top-right' />
      <Cross position='bottom-left' />
      <Cross position='bottom-right' />

      <NonNavLine side='bottom' />
      <NonNavLine side='left' />
      <NonNavLine side='right' />
    </>
  );
}

const NonNavLine = ({ side }: NonNavLineProps) => {
  const styles: Record<string, unknown> = {};
  const getStyles = (side: string) => {
    if (side !== "bottom") {
      styles.width = "1px";
      styles.top = "50%";
      styles.transform = "translateY(-50%)";
      styles.height = "90vh";
      if (side === "left") {
        styles.left = "20px";
      } else if (side === "right") {
        styles.right = "20px";
      }
    } else {
      styles.height = "1px";
      styles.width = "95vw";
      styles.bottom = "20px";
      styles.left = "50%";
      styles.transform = "translateX(-50%)";
    }

    return styles;
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bgcolor: "white",
        opacity: 0.5,
        ...getStyles(side),
      }}
    />
  );
};

const Cross = ({ position }: CrossProps) => {
  const getStyles = (position: string) => {
    switch (position) {
      case "top-left":
        return {
          top: "10px",
          left: "10px",
        };
      case "top-right":
        return {
          top: "10px",
          right: "10px",
        };
      case "bottom-left":
        return {
          bottom: "10px",
          left: "10px",
        };
      case "bottom-right":
        return {
          bottom: "10px",
          right: "10px",
        };
    }
  };
  return (
    <AddIcon
      sx={{
        position: "fixed",
        opacity: 0.5,
        ...getStyles(position),
      }}
    />
  );
};

interface NonNavLineProps {
  side: "bottom" | "left" | "right";
}

interface CrossProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}
