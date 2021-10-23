import { NextPage } from 'next';
import { DetailPostContainer  } from '../../app';
import Templates from '../../app/templates';

const DetailPost: NextPage = () => {
  return (
    <Templates>
      <DetailPostContainer />
    </Templates>
  )
};

export default DetailPost;
