import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import {FiMessageSquare } from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/hooks'
import { ListView } from '../../..'
import { IComment, ILoading } from '../../../../utils/dataTypes'
import AddComment from './AddComment'
import { useDispatch, useSelector } from 'react-redux'
import { setComment } from '../../../../redux/reducers/comments'
import EditComment from './EditComment'
import { useState } from 'react'
import { LoadingSpinner } from '../../../components'

interface ListCommentType {
  comments: IComment[];
}

const Comments = ({comments}: ListCommentType) => {
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [commentId, setCommentId] = useState<number>(0)

  const handleDelete = (id: number) => {
    const newComment : any = comments.filter(comment => comment.id !== id)
    dispatch(setComment(newComment));
  }

  const handleEdit = (id: number) => {
    setCommentId(id)
    onOpen()
  }

  const loading = useSelector((state:ILoading) => state.loading.loading)

  return (
    <>
    {isOpen && <EditComment 
      isOpen={isOpen}
      onClose={onClose}
      commentId={commentId} 
    />}
    <Box borderTop="1px solid" borderColor="gray.200" pt="1rem">
      <Box mb="1rem">
        <Flex alignItems="center" justifyContent="space-between">
          <Text><Icon as={FiMessageSquare} /> {comments?.length} Comments</Text>
          <AddComment />
        </Flex>
      </Box>
      <Box px="1rem">
        { !loading ?
          comments?.map(comment => {
            return (
              <ListView
                key={comment.id} 
                id={comment.id}
                title={comment.name}
                desc={comment.body}
                subtitle={`Comment By: ${comment.email}`}
                onDelete={() => handleDelete(comment.id)}
                onEdit={() => handleEdit(comment.id)}
              />
            )
          }) : <LoadingSpinner message="Load Comments" />
        }
      </Box>
    </Box>
    </>
  )
}

export default Comments;