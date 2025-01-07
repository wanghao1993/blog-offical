export declare namespace AiTypes {
  interface AiTool {
    id: number;
    title: string;
    description: string;
    url: string;
    content: string;
    category_id: number;
    category: string;
    created_at: Date;
    updated_at: Date;
  }
  interface AiTools {
    [key: string]: AiTool[];
  }
}
export {};
