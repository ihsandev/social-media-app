import { extendTheme, ThemeConfig, theme as chakraTheme } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const fonts  = {
  ...chakraTheme.fonts,
  heading: `Poppins, sans-serif`,
  body:`Poppins, sans-serif`,
}

const theme = extendTheme({
  ...chakraTheme,
  config,
  fonts
})

export default theme