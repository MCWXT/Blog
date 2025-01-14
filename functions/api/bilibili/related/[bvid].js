export async function onRequestGet(context) {
  const result = fetch('https://api.bilibili.com/x/web-interface/archive/related?bvid=' + context.params.bvid).then(response => response.text());
  return new Response(result);
}
