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
    name: 'MC下载',
    to: '/mc/download'
  }, {
    name: 'MC盘',
    to: {
      path: '/link/to',
      query: {
        url: '//pan.mcwxt.top'
      }
    }
  }, {
    name: 'Cloud盘',
    to: {
      path: '/link/to',
      query: {
        url: '//cloud.mcwxt.top'
      }
    }
  }
]