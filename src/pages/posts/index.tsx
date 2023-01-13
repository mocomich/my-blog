import { GetStaticProps } from "next";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { PostsTemplate } from "@/components/templates/PostsTemplate";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/types/next";
import { PostsData } from "@/types/post";

type Props = PostsData;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      posts: data.contents,
    },
  };
};

const PostsPage: NextPageWithLayout<Props> = ({ posts }) => {
  return <PostsTemplate posts={posts} />;
};

PostsPage.getLayout = DefaultLayout;

export default PostsPage;
