export function newDay(lastUpdateTimestamp, loginTimestamp) {
  // 将时间戳转换为北京时间
  const BEIJING_OFFSET = 8 * 60 * 60 * 1000;

  const lastDate = new Date(Number(lastUpdateTimestamp) + BEIJING_OFFSET);
  const loginDate = new Date(Number(loginTimestamp) + BEIJING_OFFSET);

  // 提取北京时间的日期部分
  const lastDay = new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate());
  const loginDay = new Date(loginDate.getFullYear(), loginDate.getMonth(), loginDate.getDate());

  // 比较日期部分
  return loginDay > lastDay;
}