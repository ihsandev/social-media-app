import { Box, Text, Flex, Button, Icon } from '@chakra-ui/react'
import {FiMessageSquare, FiPlus } from 'react-icons/fi'
import { useDisclosure } from '@chakra-ui/hooks'
import { ListView } from '../../..'
import { IComment } from '../../../../utils/dataTypes'
import AddComment from './AddComment'
import { useDispatch } from 'react-redux'
import { setComment } from '../../../../redux/reducers/comments'
import EditComment from './EditComment'
import { useState } from 'react'

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
        {
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
          })
        }
      </Box>
    </Box>
    </>
  )
}

export default Comments;