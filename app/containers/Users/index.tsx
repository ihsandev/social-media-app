import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, Thead, Tr, Th, Tbody, Td, Heading} from '@chakra-ui/react'
import { getUser } from '../../../redux/reducers/user';
import { IUserType } from '../../../utils/dataTypes';

interface IUser {
  users: { user: IUserType[]}
}

export default function UsersContainer() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  },[dispatch])
  
  const users = useSelector((state:IUser) => state.users.user)
  
  return (
    <>
      <Heading mb="1rem" fontSize="1.5rem">Users</Heading>
      <Box border="1px solid" borderRadius="1rem" borderColor="gray.200" p="1rem">
        <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
                <Th>Web</Th>
                <Th>Address</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users && users.map(user => {
                return (
                  <Tr key={user.id}>
                    <Td>{user.name}</Td>
                    <Td>{user.username}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.website }</Td>
                    <Td>{user.address.street}</Td>
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </Box>
    </>
  )
}