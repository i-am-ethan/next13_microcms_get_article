export type BlogResponse = {
  contents: BlogPost[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title?: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  content?: string;
  slug?: string;
};