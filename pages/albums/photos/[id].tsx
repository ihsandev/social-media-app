import { NextPage } from 'next';
import { PhotosContainer  } from '../../../app';
import Templates from '../../../app/templates';

const Photos: NextPage = () => {
  return (
    <Templates>
      <PhotosContainer />
    </Templates>
  )
};

export default Photos;
