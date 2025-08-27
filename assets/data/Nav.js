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
      },
    ]
  }, {
    name: 'Cloud盘',
    icon: 'mingcute:cloud-fill',
    to: {
      path: '/linkto/cloud',
      query: {
        url: '//cloud.mcwxt.top'
      }
    }
  },
]