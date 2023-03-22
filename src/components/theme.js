import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#3e92cc",
      100: "#3e92cc",
      500: "#3e92cc",
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
        fontFamily: "",
      },
    }),
  },
});

export default theme;
