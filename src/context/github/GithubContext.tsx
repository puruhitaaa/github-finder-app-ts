import { createContext, ReactNode, useState } from 'react';
import { IUser } from '../../types/user';

type GithubProviderProps = {
  children: ReactNode;
};

interface IGithubContext {
  users: IUser[];
  isLoading: boolean;
  fetchUsers: () => void;
}

const defaultValue = {
  users: [],
  isLoading: true,
  fetchUsers: () => null,
};

export const GithubContext = createContext<IGithubContext>(defaultValue);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [users, setUsers] = useState(defaultValue.users);
  const [isLoading, setIsLoading] = useState(defaultValue.isLoading);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    setUsers(data);
    setIsLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, isLoading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};
