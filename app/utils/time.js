const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0'),
  ].join(':');
};
const formatter = new Intl.NumberFormat('zh-CN', {
  notation: 'compact',
  compactDisplay: 'short',
});

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffInDays = Math.floor((now - date) / 86400000);
  const currentYear = now.getFullYear();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 当天
  if (diffInDays === 0) {
    const diffInSeconds = Math.floor((now - date) / 1000);
    if (diffInSeconds < 60) return '刚刚';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}分钟前`;
    return `${Math.floor(diffInSeconds / 3600)}小时前`;
  }

  // 1-6天前
  if (diffInDays >= 1 && diffInDays <= 6) {
    if (diffInDays === 1) return '昨天';
    if (diffInDays === 2) return '前天';
    return `${diffInDays}天前`;
  }

  // 今年内显示月日
  if (year === currentYear) return `${month}月${day}日`;

  // 跨年显示年月
  return `${year}年${month}月`;
};

export { formatter, formatTimestamp, formatTime };
