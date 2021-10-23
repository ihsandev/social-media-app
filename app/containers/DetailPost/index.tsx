import { useEffect } from 'react'
import {useRouter  } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Heading, Text } from "@chakra-ui/layout"
import { getPost } from '../../../redux/reducers/posts'
import { getComment } from '../../../redux/reducers/comments'
import { getUser } from '../../../redux/reducers/user'
import { IComment, IListPosts, IUserType } from '../../../utils/dataTypes'
import Comments from './partials/Comments'

interface IPostDetail {
  posts: { post: IListPosts}
}

interface IPostComment {
  comments: { comment: IComment[]}
}

interface IUser {
  users: { user: IUserType[]}
}

export default function DetailPost() {
  const router = useRouter()
  const id : any = router?.query?.id;
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPost(id))
  },[dispatch, id])

  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  useEffect(() => {
    dispatch(getComment(id))
  },[dispatch, id])
  
  const detailPost = useSelector((state: IPostDetail) => state.posts.post)
  const comments = useSelector((state: IPostComment) => state.comments.comment)
  const users = useSelector((state:IUser) => state.users.user)
  const user = users.filter(user => user.id === detailPost.userId)[0];

  return (
    <Box>
      <Box mb="1rem">
        <Text fontSize="0.7rem">Post By: {user?.name} | @{user?.username}</Text>
      </Box>
      <Box mb="1.5rem">
        <Heading mb="1rem" fontSize="1.5rem">{detailPost?.title?.toUpperCase()}</Heading>
        <Text>{detailPost?.body}</Text>
      </Box>
      <Comments
        comments={comments} 
      />
    </Box>
  )
}