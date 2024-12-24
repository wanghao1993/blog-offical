import model from "./genAi";

async function getSummary(content: string) {
  const prompt =
    "请帮我总结以下内容，限制在300个字体内，提供中英文版本：" + content;

  try {
    const result = await model.generateContent(prompt);

    return result;
  } catch (e) {
    console.log(e);
  }
}

const AISummay = async ({ content }: { content: string }) => {
  const summary = await getSummary(content);

  return (
    <div className="bg-[#28282c] p-3">
      <div className="py-2 border-b">AI总结</div>
      <div>{summary}</div>
    </div>
  );
};

export default AISummay;
