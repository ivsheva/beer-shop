import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000",
    white: "#fff",
    lightblack: "#222",
    grey: "#646464",
    green: "#48C291",
    lightgrey: "#E9E9E9",
    red: "#E40053",
    darkgreen: "#023D32",
  },
  fonts: {
    body: "Work Sans, sans-serif",
  },
});

export default theme;
