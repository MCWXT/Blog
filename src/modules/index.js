import axios from './axios.js';
import cache from './cache.js';
import toast from './toast.js';
import { formatter, formatTimestamp, formatTime } from './time.js';
import { validateToken } from './server/github.js';
import easterEgg from './easterEgg.js';

const httproxy = (url) => {
  const proxyServer = 'https://proxy.mcwxt.top/';
  return proxyServer + url;
};

export {
  axios,
  httproxy,
  cache,
  toast,
  formatter,
  formatTimestamp,
  formatTime,
  validateToken,
  easterEgg,
};
