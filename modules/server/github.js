import { Octokit } from 'octokit';
import { cache } from 'tao';
const octokitConfig = {}
const access_token = localStorage.getItem('access_token');
access_token && (octokitConfig.auth = access_token);
export const octokit = new Octokit(octokitConfig);
export const config = {
  owner: "MCWXT",
  repo: "Blog"
}