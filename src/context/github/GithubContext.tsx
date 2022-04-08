import { createContext, ReactNode, useReducer } from 'react';
import { IUser } from '../../types/user';
import { githubReducer, Types } from './GithubReducer';

type GithubProviderProps = {
  children: ReactNode;
};

interface IGithubContext {
  users: IUser[];
  isLoading: boolean;
  searchUsers: (text: string) => void;
  clearUsers: () => void;
}

const defaultValue = {
  users: [],
  isLoading: true,
  searchUsers: () => null,
  clearUsers: () => null,
};

export const GithubContext = createContext<IGithubContext>(defaultValue);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: GithubProviderProps) => {
  const initialState = {
    users: defaultValue.users,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    dispatch({
      type: Types.GetUsers,
      payload: items,
    });
  };

  const clearUsers = () =>
    dispatch({
      type: Types.ClearUsers,
    });

  const setLoading = () =>
    dispatch({
      type: Types.SetLoading,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
