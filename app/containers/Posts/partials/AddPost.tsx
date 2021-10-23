import React from 'react';
import { useSelector } from 'react-redux';
import { useDisclosure } from "@chakra-ui/hooks"
import {
  FormControl,
  FormLabel, 
  FormErrorMessage,
  Input,
  Textarea,
  Select,
  Button,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { ILoading, IPostData, IUserType } from '../../../../utils/dataTypes';
import { createPost } from '../../../../services/posts';
import { ModalForm } from '../../../components';
import { FiPlus } from 'react-icons/fi';

interface IUser {
  users: { user: IUserType[] }
}

export default function AddPost() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data: IPostData) => {
    const newData = {
      ...data,
      userId: Number(data.userId)
    }
    await createPost(newData)(dispatch)
    onClose()
  };

  const users = useSelector((state:IUser) => state.users.user)

  return (
    <>
    <Button onClick={onOpen} colorScheme="teal" size="sm" leftIcon={<FiPlus />}>
      Add Post
    </Button>
    <ModalForm
      title="Add New Post"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={errors.userId}>
        <FormLabel>User</FormLabel>
        <Select {...register("userId", {required: true})} placeholder="Select User">
          {users && users.map(user => {
            return (
              <option key={user.id} value={user.id}>{user.name} | @{user.username}</option>
            )
          })}
        </Select>
        <FormErrorMessage>{errors.userId && <p>User is required</p>}</FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={errors.title}>
        <FormLabel>Title</FormLabel>
        <Input {...register("title", { required: true })} placeholder="Title Post" />
        <FormErrorMessage>{errors.title && <p>Title is required</p>}</FormErrorMessage>  
      </FormControl>

      <FormControl mt={4} isInvalid={errors.body}>
        <FormLabel>Content</FormLabel>
        <Textarea {...register("body", { required: true })} placeholder="Type Your Body Content here.." />
        <FormErrorMessage>{errors.body && <p>Content is required</p>}</FormErrorMessage>
      </FormControl>
    </ModalForm>
    </>
  )
}