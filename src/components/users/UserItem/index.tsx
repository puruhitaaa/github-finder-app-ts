import { Link } from 'react-router-dom';
import { IUser } from '../../../types/user';

interface IUserItem {
  user: IUser;
}

const UserItem = ({ user }: IUserItem) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row justify-center items-center space-x-5 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            to={`/users/${user.login}`}
            className="text-base-content text-opacity-40"
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
