import { GetStaticProps } from "next";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { HomeTemplate } from "@/components/templates/HomeTemplate";
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

const Home: NextPageWithLayout<Props> = ({ posts }) => {
  return <HomeTemplate posts={posts} />;
};

Home.getLayout = DefaultLayout;

export default Home;
