import { DateTime } from "../../atoms/DateTime";
import { Tags } from "../Tags";

import { Post } from "@/types/post";

type Props = Post;

export const PostCard: React.FC<Props> = ({ url, title, excerpt, domain, tags, publishedAt }) => {
  return (
    <a className="relative flex flex-col justify-between space-y-4 border border-gray-200 bg-white py-4 px-6 pb-10  hover:bg-gray-100 dark:border-white dark:bg-gray-800 dark:hover:bg-gray-700" href={url} rel="noreferrer" role="article" target={url.includes("http") ? "_blank" : ""}>
      <h2 className="min-h-[60px] text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 dark:text-white">{title}</h2>
      <div className="min-h-[60px]">
        <p className="font-normal text-gray-700 line-clamp-4 dark:text-gray-300">{excerpt}</p>
      </div>
      <Tags tags={tags} />
      <div className="absolute bottom-2 left-0 flex w-full justify-between px-4">
        <p className="text-sm font-semibold text-gray-700  dark:text-gray-300">{domain}</p>
        <DateTime classes={["text-sm text-gray-700 dark:text-gray-300"]} date={publishedAt} />
      </div>
    </a>
  );
};
