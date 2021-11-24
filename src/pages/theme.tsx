import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

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

      a: {
        color: "inherit",
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },

  colors: {
    personalized: {
      cyan: "#21B6E5"
    }
  }
})
