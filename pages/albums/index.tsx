import { NextPage } from 'next';
import { AlbumsContainer } from '../../app';
import Templates from '../../app/templates';

const Albums: NextPage = () => {
  return (
    <Templates>
      <AlbumsContainer />
    </Templates>
  )
};

export default Albums;
