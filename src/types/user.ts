export interface IUser {
  id?: string;
  login?: string;
  avatar_url?: string;
  name?: string;
  type?: string;
  hireable?: boolean;
  bio?: string;
  html_url?: string;
  location?: string;
  blog?: string;
  twitter_username?: string;
  followers?: string;
  following?: string;
  public_repos?: string;
  public_gists?: string;
}

export type Repo = {
  id?: string;
  name?: string;
  description?: string;
  html_url?: string;
  forks?: string;
  open_issues?: string;
  watchers_count?: string;
  stargazers_count?: string;
};
