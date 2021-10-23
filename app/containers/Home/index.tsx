import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading, Stat, StatLabel, StatNumber, Grid } from '@chakra-ui/react'
import { getUser } from '../../../redux/reducers/user';
import { IDataAlbums, IListPosts, IUserType } from '../../../utils/dataTypes';
import { getAllPosts } from '../../../redux/reducers/posts';
import { getAlbums } from '../../../redux/reducers/albums';

interface IUser {
  users: { user: IUserType[]}
}

interface IPosts {
  posts: { posts: IListPosts[] }
}

interface IAlbums {
  albums: { albums: IDataAlbums}
}

export default function HomeContainer() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  useEffect(() => {
    dispatch(getAllPosts())
  },[dispatch])

  useEffect(() => {
    dispatch(getAlbums())
  },[dispatch])
  
  const users = useSelector((state:IUser) => state.users.user)
  const allPosts = useSelector((state:IPosts) => state.posts.posts)
  const albums = useSelector((state: IAlbums) => state.albums.albums)
  
  return (
    <>
      <Heading mb="1rem" fontSize="1.5rem">Welcome to Sosmed Dashboard</Heading>
      <Grid templateColumns={["1fr","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap="1rem" mt="2rem">
        <Box bgColor="teal" color="white" border="1px solid" borderColor="gray.200" borderRadius="1rem" p="1rem">
          <Stat>
            <StatLabel>Total Active Users</StatLabel>
            <StatNumber>{users?.length}</StatNumber>
          </Stat>
        </Box>
        <Box bgColor="maroon" color="white" border="1px solid" borderColor="gray.200" borderRadius="1rem" p="1rem">
          <Stat>
            <StatLabel>Total Posts</StatLabel>
            <StatNumber>{allPosts?.length}</StatNumber>
          </Stat>
        </Box>
        <Box bgColor="orange" color="white" border="1px solid" borderColor="gray.200" borderRadius="1rem" p="1rem">
          <Stat>
            <StatLabel>Total Albums</StatLabel>
            <StatNumber>{albums?.total_data}</StatNumber>
          </Stat>
        </Box>
      </Grid>
    </>
  )
}