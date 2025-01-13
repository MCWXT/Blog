export default [
  {
    name: '主页',
    to: '/'
  }, {
    name: 'B站',
    to: {
      path: '/link/to/bilibili',
      query: {
        url: 'https://space.bilibili.com/3493283118451294'
      }
    }
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
  }, {
    name: 'Gemini',
    to: {
      path: '/link/to/gemini',
      query: {
        url: '//gemini.mcwxt.top'
      }
    }
  }
]