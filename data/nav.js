export default [
  {
    name: '主页',
    to: '/'
  }, {
    name: 'B站',
    to: '/bilibili'
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
      {
        name: '云盘',
        to: {
          path: '/link/to/pan',
          query: {
            url: '//pan.mcwxt.top'
          }
        }
      }
    ]
  }, {
    name: 'Cloud盘',
    to: {
      path: '/link/to/cloud',
      query: {
        url: '//cloud.mcwxt.top'
      }
    }
  }
]