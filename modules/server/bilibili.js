import { Axios } from 'axios';
import { httproxy } from 'tao';
const axios = new Axios({
  baseURL: 'https://api.mcwxt.top'
});
export { axios }