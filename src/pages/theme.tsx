import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  styles: {
    global: {

      body: {
        bg: "#230F5B",
        color: "#FFFFFF",
        font: "400 1rem 'Roboto', sans-serif",
      },

      span: {
        fontWeight: "bold",
      },

      select: {
        bg: "#21B6E6",
        option: {
          bg: "#21B6E6",
        },
      },

      a: {
        color: "inherit",
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
})
