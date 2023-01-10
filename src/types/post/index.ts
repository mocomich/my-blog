export type Post = {
  body?: string;
  domain: string;
  excerpt: string;
  id: string;
  publishedAt: string;
  tags: string[];
  title: string;
  updatedAt: string;
  url: string;
};

export type PostData = {
  post: Post;
};

export type PostsData = {
  posts: Post[];
};
