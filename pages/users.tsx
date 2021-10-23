import { NextPage } from 'next';
import { UsersContainer  } from '../app';
import Templates from '../app/templates';

const Users: NextPage = () => {
  return (
    <Templates>
      <UsersContainer />
    </Templates>
  )
};

export default Users;
