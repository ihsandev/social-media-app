import React from 'react';
import { 
  FormControl,
  FormLabel, 
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useDisclosure
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { IPostComments } from '../../../../utils/dataTypes';
import { ModalForm } from '../../../components';
import { createComment } from '../../../../services/comments';
import { FiPlus } from 'react-icons/fi';

export default function AddComment() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: IPostComments) => {
    await createComment(data)(dispatch)
    onClose()
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" size="sm" leftIcon={<FiPlus/>}>
        Add Comment
      </Button>
      {isOpen && (
        <ModalForm
          title="Add New Comment"
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormControl mt={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" {...register("email", { required: true })} placeholder="Email" />
            <FormErrorMessage>{errors.email && <p>Email is required</p>}</FormErrorMessage>  
          </FormControl>

          <FormControl mt={4} isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
            <Input {...register("name", { required: true })} placeholder="Name" />
            <FormErrorMessage>{errors.name && <p>Name is required</p>}</FormErrorMessage>  
          </FormControl>

          <FormControl mt={4} isInvalid={errors.body}>
            <FormLabel>Content</FormLabel>
            <Textarea {...register("body", { required: true })} placeholder="Type Your Body Content here.." />
            <FormErrorMessage>{errors.body && <p>Content is required</p>}</FormErrorMessage>
          </FormControl>
        </ModalForm>
      )}
    </>
  )
}