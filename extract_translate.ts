const fs = require("fs");
const path = require("path");
const tsdk = require("tencentcloud-sdk-nodejs");
const translate = new tsdk.tmt.Client({
  credential: {
    secretId: process.env.TENCENTCLOUD_SECRET_ID,
    secretKey: process.env.TENCENTCLOUD_SECRET_KEY,
  },
  region: "ap-shanghai",
  // 可选配置实例
  profile: {
    signMethod: "TC3-HMAC-SHA256", // 签名方法
    httpProfile: {
      reqMethod: "POST", // 请求方法
      reqTimeout: 30, // 请求超时时间，默认60s
    },
  },
});

// 递归读取目录下的所有文件
function readFiles(dirs) {
  let files = [];
  dirs.forEach((dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files = files.concat(readFiles([fullPath]));
      } else if (stat.isFile()) {
        files.push(fullPath);
      }
    }
  });
  return files;
}

// 提取中文文本
function extractChinese(text) {
  const regex = /[\u4e00-\u9fa5]+/g;
  const matches = text.match(regex);
  return matches ? matches : [];
}

// 翻译并保存到文件
async function translateAndSave(englishMap, outputFilePath) {
  let translatedMap = {};
  for (const key in englishMap) {
    if (!englishMap[key]) {
      try {
        const result = await tsdk.tmt.extractChinese(key, { to: "en" });
        console.log(result);
        translatedMap[key] = result.text;
      } catch (error) {
        console.error("Translation error for:", key, error);
      }
    }
  }
  fs.writeFileSync(outputFilePath, JSON.stringify(translatedMap, null, 2));
  console.log(`Translated text saved to ${outputFilePath}`);
}

// 主函数
async function main() {
  const dirs = ["./app", "./components"]; // 指定多个目录路径
  const files = readFiles(dirs);

  let chineseMap = {};
  let englishMap = {};

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const chineseTexts = extractChinese(content);
    chineseTexts.forEach((text) => {
      chineseMap[text] = text;
      englishMap[text] = "";
    });
  }

  if (Object.keys(chineseMap).length) {
    const isExit = fs.existsSync("./locale");
    if (!isExit) {
      fs.mkdirSync("./locale");
    }
    fs.writeFileSync(
      "./locale/zh_CN.json",
      JSON.stringify(chineseMap, null, 2)
    );
    fs.writeFileSync("./locale/en.json", JSON.stringify(englishMap, null, 2));
    console.log("Chinese texts saved to zh_CN.json");
    await translateAndSave(englishMap, "./locale/en.json");
  } else {
    console.log("No Chinese texts found.");
  }
}

main();
