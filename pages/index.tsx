import { NextPage } from 'next';
import { HomeContainer  } from '../app';
import Templates from '../app/templates';

const Index: NextPage = () => {
  return (
    <Templates>
      <HomeContainer />
    </Templates>
  )
};

export default Index;
