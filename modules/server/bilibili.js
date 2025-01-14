import { Axios } from 'axios';
import { httproxy } from 'tao';
const axios = new Axios({
  baseURL: 'https://mcwxt.top/api/bilibili',
});
export { axios }