// 判单是否是图片
export function isImageUrl(url: string) {
  // 定义常见的图片扩展名
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];

  try {
    // 创建一个新的 URL 对象
    const parsedUrl = new URL(url);
    if (parsedUrl.pathname) {
      // 获取 URL 的路径部分，并提取文件扩展名
      const extension = parsedUrl.pathname.split(".").pop()?.toLowerCase();

      // 检查扩展名是否在定义的图片扩展名列表中
      return extension ? imageExtensions.includes(extension) : false;
    }
  } catch (e) {
    // 如果 URL 无效，则返回 false
    return false;
  }
}
