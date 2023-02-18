import { GetStaticProps } from "next";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/types/next";
import { PostsData } from "@/types/post";

type Props = PostsData;

// TODO: zodをつかって検証するようにしたい、もしくはラップしたgetメソッド作っちゃうか、型生成とかもschemaからするよう修正
// const postSchema = z.object({
//   body: z.string().optional(),
//   domain: z.string(),
//   excerpt: z.string(),
//   id: z.string(),
//   publishedAt: z.string(),
//   tags: z.array(z.string()),
//   title: z.string(),
//   updatedAt: z.string(),
//   url: z.string(),
// });

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      posts: data.contents,
    },
  };
};

const Home: NextPageWithLayout<Props> = ({ posts }) => {
  // Currentは直近3つだけの記事
  const currentPosts = posts.slice(0, 3);
  return <HomeTemplate posts={currentPosts} />;
};

Home.getLayout = DefaultLayout;

export default Home;
