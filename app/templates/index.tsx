import { Box, Flex } from "@chakra-ui/layout";
import { Navbar, Sidebar } from "..";

const Templates = ({children}:any) => {
  return (
    <>
      <Navbar />
      <Box
        py="80px"
        position="relative"
        px="1rem"
      >
        <Flex>
          <Sidebar />
          <Box ml="22%" flex="1">
            {children}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Templates;