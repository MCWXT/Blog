export function onRequestPost(context) {
  const result = fetch('https://api.bilibili.com/x/web-interface/popular').then(response => response.text());
  return result;
}
