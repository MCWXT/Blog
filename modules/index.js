import { Axios } from 'axios';
const axios = new Axios({});
const getTemplate = async (src) => {
  const url = src + '.html';
  return axios.get(url).then((response) => response.data);
}
const importComponent = (src) => {
  return () => import(src + '.js');
}
const httproxy = (url) => {
  const proxyServer = 'https://proxy.mcwxt.top/';
  return proxyServer + url;
};
const cache = {
  setItem(key, content) {
    localStorage.setItem(key, typeof content == 'string' ? content : JSON.stringify(content));
    return content;
  },
  getItem(key) {
    const content = localStorage.getItem(key);
    return content && content.indexOf('{') != -1 ? JSON.parse(content) : content;
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  }
}
const toast = (data) => {
  document.dispatchEvent(new CustomEvent('toast', {
    detail: {
      data
    },
    bubbles: true,
    cancelable: true
  }));
}
export { axios, getTemplate, importComponent, httproxy, cache, toast }