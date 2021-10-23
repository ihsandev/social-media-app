import { Box, Text, Flex, Button, Icon } from '@chakra-ui/react'
import {FiMessageSquare, FiPlus } from 'react-icons/fi'
import { ListView } from '..';
import { IComment } from '../../../utils/dataTypes';

interface ListCommentType {
  comments: IComment[];
}



const Comments = ({comments}: ListCommentType) => {
  return (
    <Box borderTop="1px solid" borderColor="gray.200" pt="1rem">
      <Box mb="1rem">
        <Flex alignItems="center" justifyContent="space-between">
          <Text><Icon as={FiMessageSquare} /> {comments.length} Comments</Text>
          <Button colorScheme="teal" size="sm" leftIcon={<FiPlus/>}>
            Add Comment
          </Button>
        </Flex>
      </Box>
      <Box px="1rem">
        {
          comments.map(comment => {
            return (
              <ListView
                key={comment.id} 
                id={comment.id}
                title={comment.name}
                desc={comment.body}
                subtitle={`Comment By: ${comment.email}`}
              />
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Comments;