import { useSelector } from 'react-redux';
import { 
  FormControl,
  FormLabel, 
  FormErrorMessage,
  Input,
  Textarea ,
  Select,
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import { IListPosts, IPostData, IUserType } from '../../../../utils/dataTypes';
import { setEditPost } from '../../../../redux/reducers/posts';
import { updatePost } from '../../../../services/posts';
import { ModalForm } from '../../../components';

interface IUser {
  users: { user: IUserType[] }
}

interface IAddPost {
  postId: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function AddPost(props: IAddPost) {
  const { postId, isOpen, onClose } = props;
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const users = useSelector((state:IUser) => state.users.user)
  const posts = useSelector((state: { posts : { posts: IListPosts[] }}) => state.posts.posts)
  const post = posts?.filter(post => Number(post.id) === Number(postId))[0]

  const onSubmit = (data: IPostData) => {
    const newData : IPostData = {
      ...data,
      id: post.id,
      userId: Number(data.userId)
    }
    handleUpdateData(newData)
  };

  const handleUpdateData = async (newData: IPostData) => {
    await updatePost(newData, postId)
      .then(res => {
          const formData : any = posts.map(post => {
            return Number(post.id) === Number(postId) ? res : post
          })
          dispatch(setEditPost(formData))
      })
    onClose()
  }

  return (
    <>
    <ModalForm
      title="Edit Post"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl isInvalid={errors.userId}>
        <FormLabel>User</FormLabel>
        <Select {...register("userId", {required: true, value: post?.userId})} placeholder="Select User">
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
        <Input {...register("title", { required: true, value: post?.title })} placeholder="Title Post" />
        <FormErrorMessage>{errors.title && <p>Title is required</p>}</FormErrorMessage>  
      </FormControl>

      <FormControl mt={4} isInvalid={errors.body}>
        <FormLabel>Content</FormLabel>
        <Textarea {...register("body", { required: true, value: post?.body })} placeholder="Type Your Body Content here.." />
        <FormErrorMessage>{errors.body && <p>Content is required</p>}</FormErrorMessage>
      </FormControl>
    </ModalForm>
    </>
  )
}