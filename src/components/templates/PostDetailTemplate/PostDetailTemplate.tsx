import Head from "next/head";

import { Button } from "@/components/atoms/Button";
import { DateTime } from "@/components/atoms/DateTime";
import { PostBody } from "@/components/atoms/PostBody";
import { Spacer } from "@/components/atoms/Spacer";
import { usePageTransition } from "@/components/hooks/usePageTransition";
import { pageTitle } from "@/components/meta";
import { Tags } from "@/components/molecules/Tags";
import { PostData } from "@/types/post";

type Props = { body: string } & PostData;

export const PostDetailTemplate: React.FC<Props> = ({ post, body }) => {
  const { backToPreviousPage } = usePageTransition();
  return (
    <main className="bg- mx-auto w-full px-4 md:px-8 lg:max-w-3xl">
      <Head>
        <title>{pageTitle(post.title)}</title>
      </Head>
      <Spacer axis="VERTICAL" size={12} />
      <h1 className="text-left text-3xl font-bold dark:text-white">{post.title}</h1>
      <Spacer axis="VERTICAL" size={8} />
      <Tags tags={post.tags} />
      <Spacer axis="VERTICAL" size={8} />
      <div className="flex justify-end space-x-2 text-sm text-gray-800 dark:text-gray-200">
        <p>公開日:</p>
        <DateTime date={post.publishedAt} />
      </div>
      <Spacer axis="VERTICAL" size={16} />
      <PostBody body={body} />
      <Spacer axis="VERTICAL" size={16} />
      <Button color="primary" onClick={backToPreviousPage} size="large">
        Go Back
      </Button>
      <Spacer axis="VERTICAL" size={16} />
    </main>
  );
};
