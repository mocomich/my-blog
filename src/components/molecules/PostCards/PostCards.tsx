import { PostCard } from "../PostCard";

import { PostsData } from "@/types/post";
type Props = PostsData;

export const PostCards: React.FC<Props> = ({ posts }) => {
  return (
    <div className="mx-auto grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </div>
  );
};
