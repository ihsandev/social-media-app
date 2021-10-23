import { NextPage } from 'next';
import { PostsContainer  } from '../app';
import Templates from '../app/templates';

const Posts: NextPage = () => {
  return (
    <Templates>
      <PostsContainer />
    </Templates>
  )
};

export default Posts;
