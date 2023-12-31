import React from "react";
import { Button } from "@mui/material";

const OutlinedButton = ({
  msg,
  bgColor,
  color,
  borderColor,
  borderRadius,
  // padding = "10px",
  ...restProps
}) => {
  return (
    <Button
      variant={"outlined"}
      disableRipple
      sx={{
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
        borderRadius: borderRadius,
        fontFamily: '"Inter", sans-serif',
        fontWeight: "bold",
        textTransform: "none",
        // padding: padding,
        ...restProps,
        ":hover": {
          borderColor: borderColor
        }
      }}>
      {msg}
    </Button>
  );
};

export default OutlinedButton;
