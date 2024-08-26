export namespace ArticleType {
  export interface ArticleItem {
    title: string;
    categories: string;
    coverImg: string;
    tags: string;
    description: string;
    content: string;
    date: Date;
  }

  export interface GetBlogList {
    list: ArticleItem[];
    totalCount: number;
  }
}
