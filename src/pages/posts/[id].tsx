import { load } from "cheerio";
import hljs from "highlight.js";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { PostDetailTemplate } from "@/components/templates/PostDetailTemplate";
import { client } from "@/lib/client";
import { NextPageWithLayout } from "@/types/next";
import { Post, PostData } from "@/types/post";

type Params = {
  params: {
    id: string;
  };
};

type Props = { body: string } & PostData;

const PostDetailPage: NextPageWithLayout<Props> = ({ post, body }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return <PostDetailTemplate body={body} post={post} />;
};

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "blogs" });

  const posts: Post[] = data.contents;

  const paths = posts.map((content) => `/posts/${content.id}`);
  return { fallback: false, paths };
}

export async function getStaticProps({ params }: Params) {
  const id = params.id;
  const data = await client.get({ contentId: id, endpoint: "blogs" });

  const content = String(data.body);
  const $ = load(content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      body: $.html(),
      post: data,
    },
  };
}

PostDetailPage.getLayout = DefaultLayout;

export default PostDetailPage;
