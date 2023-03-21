import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        fontFamily: "",
        backGroundImage: "",
      },
    }),
  },
});

export default theme;
