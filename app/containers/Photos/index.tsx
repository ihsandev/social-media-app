import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Box, Grid, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { getPhotos } from "../../../redux/reducers/albums";
import { IListPhotos } from "../../../utils/dataTypes";
import ModalPhoto from "./partials/ModalPhoto";

interface IPhotos {
  albums: { photos: IListPhotos[]}
}

export default function PhotosContainer() {

  const [title, setTitle] = useState('')
  const [src, setSrc] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query;
  
  useEffect(() => {
    dispatch(getPhotos())
  },[dispatch, id])
  
  const photos = useSelector((state:IPhotos) => state.albums.photos)
  const filterPhotos = photos.filter(photo => Number(photo.albumId) === Number(id))

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = (data: { title: string; src: string; }) => {
    setTitle(data.title)
    setSrc(data.src)
    onOpen()
  }

  return (
    <>
      {isOpen && <ModalPhoto isOpen={isOpen} onClose={onClose} title={title} src={src} />}
      <Heading mb="1rem" fontSize="1rem">({filterPhotos?.length}) Photos of Album {router?.query?.title}</Heading>
        <Grid 
          templateColumns={["repeat(2, 1fr)","repeat(3, 1fr)","repeat(4, 1fr)","repeat(5, 1fr)"]} 
          gap={4}
        >
          {
          filterPhotos.map(photo => {
            return (
              <Box key={photo.id} cursor="pointer" 
                onClick={() => handleOpen({title: photo.title, src: photo.url})}>
                <Image
                  w="100%"
                  objectFit="cover"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
               />
               <Text fontSize="0.7rem">{photo.title}</Text>
              </Box>
            )
          })
          }
        </Grid>
    </>
  )
}