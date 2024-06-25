export namespace ArticleType {
  export interface ArticleItem {
    title: string;
    categories: string[];
    tags: string[];
    abstract: string;
    content: string;
    isPublished: boolean;
    viewsCount: number;
    likesCount: number;
    commentsCount: number;
    readTime: number;
    sharesCount: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }

  export interface GetBlogList {
    list: ArticleItem[];
    totalCount: number;
  }
}
