import { HStack, Heading, Box, Button, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      px="1rem"
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
      zIndex="1"
    >
        <HStack justifyContent="space-between" py="5px">
          <Heading fontSize="x-large">Sosmed Dashboard</Heading>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
    </Box>
  )
}