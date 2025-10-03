import { Axios } from 'axios';
import { httproxy } from 'tao';
let baseURL;
if (/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/g.test(location.hostname)) {
  baseURL = 'https://api.mcwxt.top';
} else {
  baseURL = 'http://localhost:3000';
}
const axios = new Axios({
  baseURL
});
export { axios }