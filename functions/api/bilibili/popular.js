export function onRequestGet(context) {
  const response = await fetch('https://api.bilibili.com/x/web-interface/popular');
  return new Response(response.body);
}
