export declare namespace AiTypes {
  interface AiTool {
    id: number;
    logo_url: string;
    title: string;
    description: string;
    url: string;
    content: string;
    category_id: number;
    category: AiCategory;
    created_at: Date;
    updated_at: Date;
  }

  interface AiCategory {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
  }
  interface AiTools {
    [key: string]: AiTool[];
  }
}
export {};
