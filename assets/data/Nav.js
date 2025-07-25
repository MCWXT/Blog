export default [
  {
    name: '主页',
    to: '/'
  }, {
    name: '视频',
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
          path: '/linkto/pan',
          query: {
            url: '//pan.mcwxt.top'
          }
        }
      }
    ]
  }, {
    name: 'Cloud盘',
    to: {
      path: '/linkto/cloud',
      query: {
        url: '//cloud.mcwxt.top'
      }
    }
  }, {
    name: 'Gemini',
    to: {
      path: '/linkto/gemini',
      query: {
        url: '//gemini.mcwxt.top'
      }
    }
  }
]