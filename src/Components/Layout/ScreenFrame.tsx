import AddIcon from "@mui/icons-material/Add";

export default function ScreenFrame() {
  return (
    <>
      <Cross position='top-left' />
      <Cross position='top-right' />
      <Cross position='bottom-left' />
      <Cross position='bottom-right' />
    </>
  );
}

const NonNavLine = () => {};

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
