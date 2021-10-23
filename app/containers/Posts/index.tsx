import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Heading, Flex, Button, useDisclosure } from "@chakra-ui/react";
import { ListView } from "../..";
import { getPosts, setPosts } from '../../../redux/reducers/posts';
import { IListPosts, ILoading, IUserType } from '../../../utils/dataTypes';
import { getUser } from '../../../redux/reducers/user';
import AddPost from './partials/AddPost';
import EditPost from './partials/EditPost';
import { LoadingSpinner } from '../../components';


interface IPosts {
  posts: { posts: IListPosts[] }
}

interface IUser {
  users: { user: IUserType[]}
}

export default function PostsContainer() {
  const [start, setStart] = useState(0);
  const [postId, setPostId] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPosts(start))
  },[dispatch, start])

  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  const handleNext = () => {
    setStart(start + 4)
  }
  const handlePrev = () => {
    setStart(start - 4)
  }
  
  const users = useSelector((state:IUser) => state.users.user)
  const posts = useSelector((state:IPosts) => state.posts.posts)
  const loading = useSelector((state:ILoading) => state.loading.loading)

  const handleDelete = (postId: number) => {
    const newPosts : any = posts.filter(post => post.id !== postId)
    dispatch(setPosts(newPosts));
  }

  const handleEdit = (postId: number) => {
    setPostId(postId)
    onOpen()
  }

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" mb="1rem">
        <Heading fontSize="1.5rem">Posts</Heading>
        <AddPost />
        {isOpen && <EditPost 
          postId={postId}
          isOpen={isOpen}
          onClose={onClose}
        />}
      </Flex>
      <Box>
        {
        !loading ?
        posts && posts?.map(post =>
          users && users.map(user => {
            if(post.userId === user.id) {
              return (
                <ListView
                  key={post.id} 
                  id={post.id}
                  title={post.title}
                  desc={post.body}
                  subtitle={`Post By: ${user.name} | @${user.username}`}
                  onDelete={() => handleDelete(post.id)}
                  onEdit={() => handleEdit(post.id)}
                />
              )
            }
          })
        ): <LoadingSpinner message="Load Posts" />}
        <Flex justifyContent="flex-end">
          {start > 0 && (
            <Button onClick={handlePrev} mr="1rem" colorScheme="teal">Prev</Button>
          )}
          <Button onClick={handleNext} colorScheme="teal">Next</Button>
        </Flex>
      </Box>
    </>
  )
}