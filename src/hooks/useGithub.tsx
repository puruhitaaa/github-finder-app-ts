import create from 'zustand';
import { IUser } from '../types/user';

interface Github {
  users: IUser[] | [];
  isLoading: boolean;
  searchUsers: (text: string) => void;
  clearUsers: () => void;
}

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useGithub = create<Github>((set) => ({
  users: [],
  isLoading: false,
  searchUsers: async (text: string) => {
    set({ isLoading: true });

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await res.json();

    set({ users: items, isLoading: false });
  },
  clearUsers: () => set({ users: [] }),
}));
