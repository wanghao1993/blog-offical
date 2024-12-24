"use server";

import { GenerateContentResult } from "@google/generative-ai";
import model from "./genAi";

async function getSummary(content: string) {
  "use server";
  const prompt =
    "请帮我总结以下内容，限制在300个字体内，提供中英文版本：" + content;

  try {
    const result: GenerateContentResult = await model.generateContent(prompt);

    const text = result.response.text();
    return text;
  } catch (e) {
    console.log(e);

    return "AI总结失败";
  }
}

const AISummay = async ({ content }: { content: string }) => {
  const summary = await getSummary(content);

  return (
    <div className="px-3 bg-[#28282c] text-white">
      <div className="py-2 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-pink-600">
        AI总结
      </div>
      <div className="py-2">{summary}</div>
    </div>
  );
};

export default AISummay;
