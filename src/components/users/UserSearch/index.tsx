import { ChangeEvent, FormEvent, useState } from 'react';
import { useAlert } from '../../../hooks/useAlert';
import { useGithub } from '../../../hooks/useGithub';

const UserSearch = () => {
  const { users, searchUsers, clearUsers } = useGithub((state) => ({
    users: state.users,
    searchUsers: state.searchUsers,
    clearUsers: state.clearUsers,
  }));
  const setAlert = useAlert((state) => state.setAlert);

  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                onChange={handleChange}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn-btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
