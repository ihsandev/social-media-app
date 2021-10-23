import React from 'react';
import { 
  FormControl,
  FormLabel, 
  FormErrorMessage,
  Input,
  Textarea ,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { IComment, IListPosts, IPostComments } from '../../../../utils/dataTypes';
import { ModalForm } from '../../../components';
import { updateComment } from '../../../../services/comments';
import { setEditComment } from '../../../../redux/reducers/comments';

interface IPostComment {
  comments: { comment: IComment[]}
}

interface IPostDetail {
  posts: { post: IListPosts}
}

export default function EditComment(
  {isOpen, onClose, commentId} : { isOpen: boolean; onClose: () => void; commentId: number}
) {
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const detailPost = useSelector((state: IPostDetail) => state.posts.post)
  const comments = useSelector((state: IPostComment) => state.comments.comment)
  const comment = comments?.filter(comment => Number(comment.id) === Number(commentId))[0]

  const onSubmit = async (data: IPostComments) => {
    const newData : IPostComments = {
      ...data,
      email: comment.email,
      postId: detailPost.id,
      id: comment.id,
    }
    handleUpdateData(newData)
  };

  const handleUpdateData = async (newData: IPostComments) => {
    await updateComment(newData, commentId)(dispatch)
      .then(res => {
          const formData : any = comments.map(comment => {
            return Number(comment.id) === Number(commentId) ? res : comment
          })
          dispatch(setEditComment(formData))
      })
    onClose()
  }

  return (
    <>
      <ModalForm
        title="Edit Comment"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl mt={4} isInvalid={errors.name}>
          <FormLabel>Name</FormLabel>
          <Input {...register("name", { required: true, value: comment?.name })} placeholder="Name" />
          <FormErrorMessage>{errors.name && <p>Name is required</p>}</FormErrorMessage>  
        </FormControl>

        <FormControl mt={4} isInvalid={errors.body}>
          <FormLabel>Content</FormLabel>
          <Textarea {...register("body", { required: true, value: comment?.body })} placeholder="Type Your Body Content here.." />
          <FormErrorMessage>{errors.body && <p>Content is required</p>}</FormErrorMessage>
        </FormControl>
      </ModalForm>
    </>
  )
}