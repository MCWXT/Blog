import { Axios } from 'axios';
import { httproxy } from 'tao';
let baseURL;
if (/.* /.test(location.hostname)) {
  baseURL = 'https://api.mcwxt.top';
} else {
  baseURL = 'http://localhost:3000';
}
const axios = new Axios({
  baseURL
});
export { axios }