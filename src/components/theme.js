import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        ff: "",
      },
    }),
  },
});

export default theme;
