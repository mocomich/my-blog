import { Tag } from "../../atoms/Tag";

import { Post } from "@/types/post";

type Props = Pick<Post, "tags">;

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex space-x-2" role="list">
      {tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};
