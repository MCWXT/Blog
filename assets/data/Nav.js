export default [
  {
    name: '主页',
    to: '/'
  }, {
    name: '视频',
    to: '/videos'
  }, {
    name: '讨论',
    to: '/discussions'
  }, {
    name: 'MC',
    to: '/mc',
    children: [
      {
        name: '下载',
        to: '/mc/download'
      },
    ]
  }, {
    name: 'Cloud盘',
    to: {
      path: '/linkto/cloud',
      query: {
        url: '//cloud.mcwxt.top'
      }
    }
  },
]