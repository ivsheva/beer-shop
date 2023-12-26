import { extendTheme } from "@chakra-ui/react";

const colors = {
  black: "#000",
  white: "#fff",
  darkerWhite: "#F5F5F5",
  lightblack: "#222",
  inputgrey: "#6C6C7C",
  grey: "#646464",
  middlegrey: "#9E9E9E",
  darkgrey: "#6B706A",
  customGreen: "#48C291",
  lightgrey: "#E5E5E5",
  red: "#E40053",
  darkgreen: "#023D32",
  pink: "#C4AAE2",
};

const styles = {
  global: {
    body: {
      fontSize: "15px",
    },
  },
};

const breakpoints = {
  base: "0em", // 0px
  xs: "25em", // ~400px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  colors,
  fonts: {
    body: "Work Sans, sans-serif",
  },
  styles,
  breakpoints,
};

const theme = extendTheme(config);

export default theme;
