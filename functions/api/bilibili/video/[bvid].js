export async function onRequestGet(context) {
  const response = fetch('https://api.bilibili.com/x/web-interface/view?bvid=' + context.params.bvid).then(response => response.text());
  return new Response(response.body);
}
