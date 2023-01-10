import Head from "next/head";

import { AnchorButton } from "@/components/atoms/AnchorButton";
import { Spacer } from "@/components/atoms/Spacer";
import { pageTitle } from "@/components/meta";
import { HeadGroup } from "@/components/molecules/HeadGroup";
import { PostCards } from "@/components/molecules/PostCards";
import { PostsData } from "@/types/post";

type Props = PostsData;

export const HomeTemplate: React.FC<Props> = ({ posts }) => {
  return (
    <main className="mx-auto w-full px-4 md:px-8 lg:max-w-7xl">
      <Head>
        <title>{pageTitle("Home")}</title>
      </Head>
      <Spacer axis="VERTICAL" size={12} />
      <HeadGroup title="Current">
        <AnchorButton href="/posts">ALL POSTS</AnchorButton>
      </HeadGroup>
      <Spacer axis="VERTICAL" size={16} />
      <PostCards posts={posts} />
      <Spacer axis="VERTICAL" size={16} />
    </main>
  );
};
