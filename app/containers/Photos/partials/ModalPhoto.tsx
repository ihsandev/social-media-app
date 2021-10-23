import { ModalCloseButton } from "@chakra-ui/modal"
import { 
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalContent,
  Image
} from '@chakra-ui/react'

interface IModalPhoto {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  src: string;
}

export default function ModalPhoto(props: IModalPhoto) {
  const { isOpen, onClose, title, src } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={src} alt={title} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}