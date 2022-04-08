import { IUser } from '../../types/user';

export enum Types {
  GetUsers = 'GET_USERS',
  SetLoading = 'SET_LOADING',
  ClearUsers = 'CLEAR_USERS',
}

export type GetUsersAction = {
  type: Types.GetUsers;
  payload: IUser[];
};

export type SetLoadingAction = {
  type: Types.SetLoading;
};

export type ClearUsersAction = {
  type: Types.ClearUsers;
};

export type GithubAction = GetUsersAction | SetLoadingAction | ClearUsersAction;

interface GithubState {
  users: IUser[];
  isLoading: boolean;
}

export const githubReducer = (state: GithubState, action: GithubAction) => {
  switch (action.type) {
    case Types.GetUsers:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case Types.ClearUsers:
      return {
        ...state,
        users: [],
      };
    case Types.SetLoading:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
