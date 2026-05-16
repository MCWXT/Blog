const cache = {
  setItem(key, content) {
    localStorage.setItem(
      key,
      typeof content == 'string' ? content : JSON.stringify(content),
    );
    return content;
  },
  getItem(key) {
    const content = localStorage.getItem(key);
    return content && content.indexOf('{') != -1
      ? JSON.parse(content)
      : content;
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

export default cache;
