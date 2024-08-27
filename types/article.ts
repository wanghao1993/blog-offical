export namespace ArticleType {
  export interface ArticleItem {
    title: string;
    categories: string;
    tags: string;
    description: string;
    date: Date;
    id: string;
  }

  export interface GetBlogList {
    list: ArticleItem[];
    totalCount: number;
  }
}
