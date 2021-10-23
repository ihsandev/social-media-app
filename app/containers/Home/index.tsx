import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Heading} from '@chakra-ui/react'
import { getUser } from '../../../redux/reducers/user';
import { IUserType } from '../../../utils/dataTypes';

interface IUser {
  users: { user: IUserType[]}
}

export default function HomeContainer() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUser())
  },[dispatch])
  
  const users = useSelector((state:IUser) => state.users.user)
  
  return (
    <>
      <Heading mb="1rem" fontSize="1.5rem">Welcome to Sosmed Dashboard</Heading>

    </>
  )
}