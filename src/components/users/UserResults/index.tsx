import { useGithub } from '../../../hooks/useGithub';
import Spinner from '../../layout/Spinner';
import UserItem from '../UserItem';

const UserResults = () => {
  const { users, isLoading } = useGithub((state) => ({
    users: state.users,
    isLoading: state.isLoading,
  }));

  return !isLoading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
};

export default UserResults;
