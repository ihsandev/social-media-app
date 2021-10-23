import Link from 'next/link';
import { useRouter } from 'next/router';
import { VStack, Box, StackDivider, Text, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { FiUsers, FiFileText, FiBook, FiHome }   from 'react-icons/fi'

const Sidebar = () => {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const { pathname } = router;
  
  return (
    <Box 
      position="fixed"
      left="0"
      top="56px"
      bottom="0"
      w="20%"
      borderRight="1px solid"
      borderColor="gray.200"
      bgColor={colorMode === 'light' ? "white" : "gray.800"}
      p="1rem"
    >
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={2}
        align="stretch"
      >
        <Box p="0.5rem" fontWeight={pathname === '/' ? "bold" : "normal"}>
          <Link href="/">
            <a>
              <Flex alignItems="center">
                <Icon as={FiHome} />
                <Text ml="1rem">Home</Text>
              </Flex>
            </a>
          </Link>
        </Box>
        <Box p="0.5rem" fontWeight={pathname === '/users' ? "bold" : "normal"}>
          <Link href="/users">
            <a>
              <Flex alignItems="center">
                <Icon as={FiUsers} />
                <Text ml="1rem">Users</Text>
              </Flex>
            </a>
          </Link>
        </Box>
        <Box p="0.5rem" fontWeight={pathname === '/posts' || pathname === '/detail/[id]' ? "bold" : "normal"}>
          <Link href="/posts">
            <a>
               <Flex alignItems="center">
                <Icon as={FiFileText} />
                <Text ml="1rem">Posts</Text>
              </Flex>
            </a>
          </Link>
        </Box>
        <Box p="0.5rem" fontWeight={pathname === '/albums' || pathname === '/albums/photos/[id]' ? "bold" : "normal"}>
          <Link href="/albums">
            <a>
               <Flex alignItems="center">
                <Icon as={FiBook} />
                <Text ml="1rem">Albums</Text>
              </Flex>
            </a>
          </Link>
        </Box>
      </VStack>
    </Box>
  )
}

export default Sidebar;