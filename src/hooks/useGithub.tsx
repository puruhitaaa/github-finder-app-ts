import create from 'zustand';
import { IUser } from '../types/user';

interface Github {
  users: IUser[] | [];
  user: IUser;
  repos: [];
  isLoading: boolean;
  searchUsers: (text: string) => void;
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  clearUsers: () => void;
}

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const useGithub = create<Github>((set) => ({
  users: [],
  user: {},
  repos: [],
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
  getUser: async (username: string) => {
    set({ isLoading: true });

    const res = await fetch(`${GITHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    set({ user: data, isLoading: false });
  },
  getUserRepos: async (username: string) => {
    set({ isLoading: true });

    const params = new URLSearchParams({
      sort: 'created',
      per_page: '10',
    });

    const res = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();

    set({ repos: data, isLoading: false });
  },
  clearUsers: () => set({ users: [] }),
}));
