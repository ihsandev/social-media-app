import { useEffect } from "react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Heading, Text } from "@chakra-ui/layout";
import { getAlbums } from "../../../redux/reducers/albums";
import { IDataAlbums, IUserType } from "../../../utils/dataTypes";
import { getUser } from "../../../redux/reducers/user";

interface IAlbums {
  albums: { albums: IDataAlbums}
}

interface IUser {
  users: { user: IUserType[]}
}

export default function AlbumsContainer() {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAlbums())
  },[dispatch])

  useEffect(() => {
    dispatch(getUser())
  },[dispatch])
  
  const users = useSelector((state:IUser) => state.users.user)
  const albums = useSelector((state: IAlbums) => state.albums.albums)


  return (
    <>
      <Heading mb="1rem" fontSize="1.5rem">Albums</Heading>
        <Grid 
          templateColumns={["1fr","repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)"]} 
          gap={4}>
          {
            albums && albums?.data?.map(album => 
              users && users?.map(user => {
                if(user?.id === album.userId) {
                  return (
                    <Box 
                      key={album.id}
                      border="1px solid" w="180px"
                      borderRadius="6px"
                      cursor="pointer"
                      _hover={{bgColor: "teal", color: "white"}}
                    >
                      <Link href={
                        {pathname: `/albums/photos/${album.id}`, query: {title: album.title}}
                      }>
                        <a>
                          <Box p="1rem">
                            <Text mb="0.5rem" fontSize="0.8rem">@{user.username}</Text>
                            <Heading fontSize="1rem">{album.title}</Heading>
                          </Box>
                        </a>
                      </Link>
                  </Box>
                  )
                }
              })
            )
          }
        </Grid>
    </>
  )
}