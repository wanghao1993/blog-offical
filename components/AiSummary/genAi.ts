import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generative(content: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content }],
    model: "deepseek-chat",
  });
  return completion.choices[0].message.content;
}
