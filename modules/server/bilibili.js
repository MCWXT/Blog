import { Axios } from 'axios';
import { httproxy } from 'tao';
const axios = new Axios({
  baseURL: 'https://api.bilibili.com/x/web-interface',
});
export { axios }