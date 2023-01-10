import { Post } from "src/types/post";

export const postFactory = (id: number): Post => ({
  body: `Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.`,
  domain: "tech-vinyl.com",
  excerpt: "test test",
  id: `${id}`,
  publishedAt: "2023-01-08T05:47:37.440Z",
  tags: ["PHP", "AWS"],
  title: `Noteworthy technology acquisitions 2021_${id}`,
  updatedAt: "2023-01-08T05:47:37.440Z",
  url: "/posts/the-efficient-way-to-make-slides",
});

export const postsFactory = (length: number): Post[] => Array.from({ length }).map((_, id) => postFactory(id));
