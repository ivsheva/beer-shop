import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    black: "#000",
    white: "#fff",
    darkerWhite: "#F5F5F5",
    lightblack: "#222",
    grey: "#646464",
    middlegrey: "#9E9E9E",
    darkgrey: "#6B706A",
    customGreen: "#48C291",
    lightgrey: "#E5E5E5",
    red: "#E40053",
    darkgreen: "#023D32",
    pink: "#C4AAE2",
  },
  fonts: {
    body: "Work Sans, sans-serif",
  },
  styles: {
    global: {
      body: {
        fontSize: "15px",
      },
    },
  },
});

export default theme;
