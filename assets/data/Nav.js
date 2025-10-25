export default [
{
  name: '主页',
  icon: 'mingcute:home-2-fill',
  to: '/'
}, {
  name: '视频',
  icon: 'mingcute:video-fill',
  to: '/videos'
}, {
  name: '讨论',
  icon: 'mingcute:chat-1-fill',
  to: '/discussions'
}, {
  name: 'MC',
  icon: 'mdi:minecraft',
  to: '/mc',
  children: [
  {
    name: '下载',
    to: '/mc/download'
  }, ]
}, {
  name: '日志',
  icon: 'icon-park-solid:log',
  to: '/logs',
  children: [
  {
    name: '版本',
    to: '/logs/release'
  }, {
    name: '更新',
    to: '/logs/commits'
  }]
}]