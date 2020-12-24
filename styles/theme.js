import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  styles: {
    global: {
      html: {
        minWidth: "360px",
        scrollBehavior: "smooth",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
      a: {
        color: "teal.500",
      },
    },
  },

  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

export default theme;
