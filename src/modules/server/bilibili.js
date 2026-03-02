import { Axios } from 'axios';
import { httproxy } from '../index.js';

const axios = new Axios({
  baseURL: 'https://api.mcwxt.top'
});

export { axios }