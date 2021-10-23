import React from 'react';
import { useSelector } from 'react-redux';
import { useDisclosure } from "@chakra-ui/hooks"
import { 
  Button, 
  Modal,
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton,
  ModalBody, 
  FormControl,
  FormLabel, 
  FormErrorMessage,
  Input,
  ModalFooter, 
  Textarea ,
  Select,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { FiPlus } from 'react-icons/fi'
import { IPostData, IUserType } from '../../../../utils/dataTypes';
import { createPost } from '../../../../services/posts';

interface IUser {
  users: { user: IUserType[] }
}

export default function AddPost() {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
      <Button onClick={onOpen} colorScheme="teal" leftIcon={<FiPlus />}>Add Post</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Post</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
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
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}