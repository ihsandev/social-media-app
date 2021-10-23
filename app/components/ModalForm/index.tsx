import React from 'react';
import { 
  Button, 
  Modal,
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  } from '@chakra-ui/react';
import { ILoading } from '../../../utils/dataTypes';
import { useSelector } from 'react-redux';

interface IModalForm {
  onSubmit?: () => void;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children?: any
}

export default function ModalForm(props: IModalForm) {
  const { children, title, onSubmit, isOpen, onClose } = props

  const loading = useSelector((state:ILoading) => state.loading.loadingSubmit)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={onSubmit}>
            <ModalBody pb={6}>
             {children}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} type="submit" isLoading={loading}>
                Save
              </Button>
              <Button isLoading={loading} onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}