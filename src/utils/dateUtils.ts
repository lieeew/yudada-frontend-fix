import { dayjs } from "@arco-design/web-vue/es/_utils/date";

/**
 * 格式化日期时间，保持原始时间，不进行时区转换
 * @param dateString ISO格式的日期字符串，如：2025-04-30T10:57:40.000+00:00
 * @param format 格式化模式，默认为 YYYY-MM-DDTHH:mm:ss
 * @returns 格式化后的日期字符串
 */
export function formatDateTime(dateString: string, format: string = "YYYY-MM-DDTHH:mm:ss"): string {
  if (!dateString) {
    return "";
  }
  
  // 直接获取ISO字符串中的时间部分，忽略毫秒和时区信息
  // 例如: 从 "2025-04-30T10:57:40.000+00:00" 提取为 "2025-04-30T10:57:40"
  const matches = dateString.match(/(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})/);
  if (matches && matches[1]) {
    return matches[1].replace("T", " ");
  }
  
  // 如果格式不匹配，使用 dayjs 作为备选方案
  return dayjs(dateString).format(format);
}

/**
 * 格式化日期（不含时间）
 * @param dateString ISO格式的日期字符串
 * @returns 格式化后的日期字符串，如：2025-04-09
 */
export function formatDate(dateString: string): string {
  if (!dateString) {
    return "";
  }
  
  const matches = dateString.match(/(\d{4}-\d{2}-\d{2})/);
  if (matches && matches[1]) {
    return matches[1];
  }
  
  return dayjs(dateString).format("YYYY-MM-DD");
}

/**
 * 格式化时间（不含日期）
 * @param dateString ISO格式的日期字符串
 * @returns 格式化后的时间字符串，如：14:30:25
 */
export function formatTime(dateString: string): string {
  if (!dateString) {
    return "";
  }
  
  const matches = dateString.match(/T(\d{2}:\d{2}:\d{2})/);
  if (matches && matches[1]) {
    return matches[1];
  }
  
  return dayjs(dateString).format("HH:mm:ss");
} 