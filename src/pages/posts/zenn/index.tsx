import { GetStaticProps } from "next";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { PostsTemplate } from "@/components/templates/PostsTemplate";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/types/next";
import { Post, PostsData } from "@/types/post";

type Props = PostsData;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const posts: Post[] = data.contents;
  const zennPosts = posts.filter((post) => post.domain[0] === "zenn.dev");

  return {
    props: {
      posts: zennPosts,
    },
  };
};

const ZennPostsPage: NextPageWithLayout<Props> = ({ posts }) => {
  return <PostsTemplate posts={posts} />;
};

ZennPostsPage.getLayout = DefaultLayout;

export default ZennPostsPage;
