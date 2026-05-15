import { Octokit } from 'octokit';

const access_token = localStorage.getItem('access_token');
const octokitConfig = {}
access_token && (octokitConfig.auth = access_token);
export const octokit = new Octokit(octokitConfig);
export const config = {
  owner: "MCWXT",
  repo: "Blog"
}