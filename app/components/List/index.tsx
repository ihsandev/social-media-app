import Link from 'next/link';
import { Heading, Box, Text, Flex, Button, Icon, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FiTrash, FiEdit, FiMoreVertical } from 'react-icons/fi'

interface ListViewType {
  title: string;
  desc: string;
  id: number;
  subtitle?: string;
  onDelete?: () => void;
  onEdit?: () => void;
}

const ListView = ({title, desc, id, subtitle, onDelete, onEdit}: ListViewType) => {
  return (
    <Box 
      mb="1rem" 
      border="1px solid"
      borderRadius="1rem"
      p="1rem"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
            <Text mb="1rem" fontSize="0.7rem">{subtitle}</Text>
            <Box>
              <Link href={`/detail/${id}`}>
                <a>
                  <Heading mb="0.5rem" fontSize="large">{title}</Heading>
                </a>
              </Link>
              <Text fontSize="0.8rem">{desc}</Text>
            </Box>
        </Box>
        <Menu>
          <MenuButton as={Button} bgColor="transparent">
            <Icon as={FiMoreVertical} fontSize="1.5rem" />
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FiTrash/>} onClick={onDelete}>Delete</MenuItem>
            <MenuItem icon={<FiEdit />} onClick={onEdit}>Edit</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default ListView;